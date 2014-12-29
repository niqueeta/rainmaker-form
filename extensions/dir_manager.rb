class Middleman::Extensions::DirManager < Middleman::Extension
  register :dir_manager
  option :dirs, {source: 'pages', destination: '', add: [], remove: ['', 'pages']}

  def manipulate_resource_list resources
    [options.dirs].flatten.each do |opts|
      # Remove pages if specified
      opts[:remove].each do |dir|
        resources.reject! do |page|
          Dir.glob(normalise(dir) + '/*', File::FNM_DOTMATCH).include? page.source_file
        end
      end

      Array(opts[:add]).append(opts[:source]).each do |directory|
        # Normalise input
        directory   = normalise directory
        destination = normalise opts[:destination]

        # Add files outside the root, else skip as there would be a StackError
        unless directory.include? app.root
          app.files.reload_path Pathname(directory).relative_path_from Pathname app.root
        end

        # Build an array of resources from the directory
        pages = Dir.glob(directory + '/**/*', File::FNM_DOTMATCH).map do |sourcepath|
          next if File.directory? sourcepath
          buildpath = app.sitemap.extensionless_path sourcepath.sub directory + ?/, ''
          unless app.source_dir == destination
            buildpath = File.join File.basename(destination)
          end
          Middleman::Sitemap::Resource.new app.sitemap, buildpath, sourcepath
        end

        # Add the new pages to the resource list
        resources.concat pages.compact
      end
    end

    resources
  end

  private

  def normalise directory
    if Pathname(directory).relative?
      File.expand_path File.join app.source_dir, directory
    else
      File.expand_path directory
    end
  end
end

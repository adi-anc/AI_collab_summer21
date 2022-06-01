## Install Dependencies

First install our runtime dependencies (biswebbrowser, which includes jQuery, boostrap, three.js and webcomponents), webpack and a local web server using:

	npm install -d

## To Run:

First build the JS bundle using:

    gulp webpack
    
The webpack configuration is in `config/webpack.config.js`. Note that we do
not bundle `jQuery` — it is listed in `externals` in the webpack
configuration. Instead, we leave it as is and include this and bootstrap
directly in `index.html`.

Run as a web application, using:

    gulp webserver


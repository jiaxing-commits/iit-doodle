#!/usr/bin/env python

import flask


# Create the application.
APP = flask.Flask(__name__)


@APP.route('/')
def home():
    """ Displays the index page accessible at '/'
    """
    return flask.render_template('home.html')

@APP.route('/boosted')
def index():
    """ Didn't try page
    """
    return flask.render_template('index.html')
    
    
        
if __name__ == '__main__':
    APP.debug=True
    APP.run()
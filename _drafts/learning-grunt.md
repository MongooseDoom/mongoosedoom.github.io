---
layout: post
title: Learning Grunt
---

## What is Grunt?

If you go to [gruntjs.com](http://gruntjs.com/), you'll see that it has the tagline of "The Javascript Task Runner". If you're like me, you'll have no idea what that means. Think of all the small repetitive tasks we do every day as web developers like minifying css and javascript, optimizing images, compiling sass, and reloading the browser. Grunt can help with all those things!

## Starting an Example Project

If you don't have a site setup already to work from, grab a copy of the [example project](https://github.com/MongooseDoom/grunt-example) to work from. It's just a simple site I put together for learning Grunt.

### Install Grunt

You'll need to install [Node.js](http://www.nodejs.org/) if you haven't already. It's pretty simple! Click on the green "Install" button and install it like you would any other software.

Once you have Node.js installed, you'll want to install the Grunt.js Command Line Interface by running the following in the command line:

{% highlight js %}
npm install -g grunt-cli
{% endhighlight %}

<small>If that doesn't work the first time, remember to try adding sudo at the begining.</small>

This doesn't install the task runner really. It basically makes it so that when you type grunt into the command line, it knows what you're talking about even if you don't have a grunt project in the current directory. Grunt works more on a per project basis. That will make more sense later.

### Setup your files

You'll need two files at the root of your project to get Grunt going.

1. **package.json**
2. **Gruntfile.js**

### package.json

This file contains some basic information about your project and manages your dependencies. If you're following along with the example project, go ahead and paste the following into you're package.json file.

{% highlight js %}
{
  "name": "donuts-are-delicious",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-imagemin": "^0.8.0"
  }
}
{% endhighlight %}

In this example, our dependencies are Grunt and an imagemin plugin. Name, version, and devDependencies are the only items required in this file. If you want to add more information to your package.json file, [check out the specifications here](https://www.npmjs.org/doc/files/package.json.html).

### Gruntfile.js

{% highlight js %}
module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuration for each task
        imagemin: {
            ...
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin']);

};
{% endhighlight %}

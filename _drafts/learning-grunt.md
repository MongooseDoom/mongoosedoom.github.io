---
layout: post
title: Learning Grunt
---

> This article is based off a workshop I presented to my team, [Grunt is not Scary or Hard](http://mongoosedoom.github.io/grunt-workshop/) that was inspired by Chris Coyier's wonderful article [Grunt for People Who Think Things Like Grunt are Weird and Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/)

## What is Grunt?

If you go to [gruntjs.com](http://gruntjs.com/), you'll see that it has the tagline of "The Javascript Task Runner". If you're like me, you'll have no idea what that means. Think of all the small repetitive tasks we do every day as web developers like minifying css and javascript, optimizing images, compiling sass, and reloading the browser. Grunt can help with all those things!

## Starting an Example Project

If you don't have a site setup already to work from, grab a copy of the [example project](https://github.com/MongooseDoom/grunt-example) to work from. It's just a simple site I put together for learning Grunt.

### Install Grunt

You'll need to install [Node.js](http://www.nodejs.org/) if you haven't already. It's pretty simple! Click on the green "Install" button and install it like you would any other software.

Once you have Node.js installed, you'll want to install the Grunt.js Command Line Interface by running the following in the command line:

{% highlight console %}
npm install -g grunt-cli
{% endhighlight %}

<small>If that doesn't work the first time, remember to try adding sudo at the begining.</small>

This doesn't really install the task runner. It basically makes it so that when you type grunt into the command line, it knows what you're talking about even if you don't have a grunt project in the current directory. Grunt works more on a per project basis. That will make more sense later.

### Setup your files

You'll need two files at the root of your project to get Grunt going.

1. *package.json*
2. *Gruntfile.js*

### package.json

This file contains some basic information about your project and manages your dependencies. If you're following along with the example project, go ahead and paste the following into you're *package.json* file.

{% highlight json %}
{
  "name": "donuts-are-delicious",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-imagemin": "^0.8.0"
  }
}
{% endhighlight %}

In this example, our dependencies are Grunt and an imagemin plugin. Name, version, and devDependencies are the only items required in this file. If you want to add more information to your *package.json* file, [check out the specifications here](https://www.npmjs.org/doc/files/package.json.html).

### Gruntfile.js

This file contains the configurations of the plugins we install. It's where you setup what will happen when you run a Grunt task.

{% highlight js %}
module.exports = function(grunt) {

    // 1. Cnfiguration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuration for each task
        imagemin: {
            ...
        }

    });

    // 3. Where we tell Grunt what plugins we plan to use
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what tasks to run
    grunt.registerTask('default', ['imagemin']);

};
{% endhighlight %}

You can also copy this example to add to your *Gruntfile.js* file.

### Install dependencies

Once you have your *package.json* file, you can install your dependencies by running the following command:

{% highlight console %}
npm install
{% endhighlight %}

If you used the example from earlier, it will install Grunt and the *imagemin* plugin.

## Adding a new plugin

In the example we've been using, it already has the *imagemin* plugin but what if you want to add a new one?

1. Run command to install plugin
2. Register task in Gruntfile.js
3. Configure task
4. Register and run the task

### 1. Run command to install plugin

First we need to install the plugin that we want to use. In the example, we'll install the *sass* plugin but feel free to check out the [plugin listing](http://www.gruntjs.com/plugins) and install any plugin you'd like.

Run the following command to install the sas plugin or change the *grunt-contrib-sass* part to match your desired plugin.

{% highlight console %}
npm install grunt-contrib-sass --save-dev
{% endhighlight %}

The --save-dev flag means our package.json file gets automatically updated to include the dependency we've just installed

###2. Register task in Gruntfile.js

Now we need to register the task in *Gruntfile.js* so that Grunt knows we intend to use it. Add the following to *Gruntfile.js* below the task configuration section. Change the name if you're installing a different plugin.

{% highlight js %}
grunt.loadNpmTasks('grunt-contrib-sass');
{% endhighlight %}

###3. Configure task

Now you'll need to configure your task. Check out the readme for each plugin you install. I found that most of the time, I could just copy and paste an example and adjust wanted I needed. Here's the [readme for grunt-contrib-sass](https://www.npmjs.org/package/grunt-contrib-sass).

{% highlight linenos js %}
grunt.initConfig({
    ...
    sass: {                                   // Task
        dist: {
            options: {
                style: 'expanded',            // Output style
                sourcemap: true               // Use source maps
            },
            files: {
                // Output path : Sass path
                'css/styles.css': 'scss/styles.scss'
            }
        }
    },
    imagemin: {
        dynamic: {                         // Another target
            files: [{
              expand: true,                // Enable dynamic expansion
              cwd: 'examples/images/',     // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
              dest: 'images/'              // Destination path prefix
            }]
        }
    },
{% endhighlight %}

###4. Register and run the task

At the bottom of *Gruntfile.js*, you'll need to register the task we just installed.

{% highlight js %}
grunt.registerTask('default', ['sass']);
grunt.registerTask('images', ['imagemin','sprite']);
{% endhighlight %}

In this example, running <code>grunt</code> in the command line without specifying a task will run the sass task. Running <code>grunt images</code> would run the *imagemin* and *imagemin* task. Try running <code>grunt</code> or <code>grunt images</code> now and see what happens!

## Try it out!

Now that you know the basics of using Grunt, try it out on your next project! Whenever you find yourself repeating a task, check the [plugin listings](http://gruntjs.com/plugins) to see if someone made a plugin for that task or [make your own](http://gruntjs.com/creating-plugins)!

## Resources

- [Grunt](http://gruntjs.com/)
- [My Grunt Workshop](http://mongoosedoom.github.io/grunt-workshop/)
- [Grunt for People Who Think Things Like Grunt are Weird and Hard by Chris Coyier](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
- [imagemin task](https://www.npmjs.org/package/grunt-contrib-imagemin)
- [watch task](https://www.npmjs.org/package/grunt-contrib-watch)
- [sass task](https://www.npmjs.org/package/grunt-contrib-sass)
- [spritesmith task](https://www.npmjs.org/package/grunt-spritesmith)
- [browsersync.io]((http://www.browsersync.io/))



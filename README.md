Blueprint
=========

Clickable Prototype Framework based on Bootstrap 3 and with Mustache.js

## Requirements
* [Twitter Bootstrap][1] (incl. jQuery & Modernizer)
* [Mustache.js][2]

## Optional (needs editing)
* [jQuery.UI][3]


## Foreword
Brueprint is a framework to create clickable prototypes fast and easy. It is **not** meant for production use. Blueprint provides pragamtic workflow for _Interactione Designer_ who have knowledge of HTML/CSS.

Blueprint provides a optional _Blueprint like_ style to the default twitter bootstrap styles, which help to let clients focus on the layout and interaction without being mislead by something that looks already like somewaht of a design. It's like Basiliq but with a rather more appeling drafts look.

### Worklflow
Blueprint was build for the following type of workflow:
* **Blueprinting** a Clickable Prototype, building the layout and interactions.
* **Design** by removing the Blueprint stylesheets and start designing based on Twitter Bootstrap. All styles added in the _Blueprint_ process remain and can now be refined.
* **Build** Wehn the design is done, you're ready to build, the markup is already done and the CSS may be reused for production. You only need to handle the project to your Developer. :)

## Installation
Blueprint is build with [Yeoman][4] with the couchapp generator, however you may also use the simple webapp-generator and edit the Gruntfile.js. If you use Yeoman simply go with:
`$ yo couchapp`
and checout this repo in your project:
`$ git clone https://github.com/Marc3llo/blueprint.git` 
and install the dependencies by
`$ bower install`


## Usage
### Units
Units are like templates, and Blueprint provides already a couple units like a gallery with a simple lightbox, a profile and a feky login/logout unit. The idea is that apart from the login/logout units, each unit works in itself. However for more complex units there may have to be made exceptions. Styles applies are suggested to be seperate from the unit, sionce you might wanna reause your CSS later in production.

#### Using Units
Blueprint focuses on fast building of clickable prototypes. To include a unit, wether one of the default ones or your own. simply add the attribute "unit" to your container:
`<div unit="gallery"></div>`
If its not an excisting unit, make sure to add your unit as a .html file to your _units_ folder. 

You may use it in any possible way and add your desired bootstrap classes:
`<div unit="content" class="col-md-6 well"></div>`

### Mustache.js
All data in Blueprint is placed into the data.json file in the scripts folder.

If your Want to have different pages in your site you simply add them to your data.json as so while icons and class are optional:
```
"pages":[
		{
			"title": "home",
			"href": "/",
			"class": "",
			"icon": "glyphicon glyphicon-home"
		},
		{
			"title": "about",
			"href": "about.html",
			"class": "",
			"icon": "glyphicon glyphicon-map-marker"
		},
		{
			"title": "contact",
			"href": "contact.html",
			"class": "",
			"icon": "glyphicon glyphicon-envelope"
		}
	],
```
This makes it very easy to generate the Navigation, and keeps it up to date without the need of changing your HTML Markup.

To repeat your pages in a Navigation you just can add this into your nav.html unit:
```
<ul class="nav nav-pills pull-right">
	{{#pages}}
		<li class="navel {{title}}"><a href="{{href}}"><span class='{{{icon}}}'></span> {{title}}</a></li>
	{{/pages}}
</ul>
```
This will repeat every page in the data.json into your unordered list with provided data from the data.json where you place its double curly braces.

For detailed documentation visit [Mustach.js][2]

### Grid
There's a grid overlay for the blueprint and basic bootstrap style. it is turned in the Settings section of the blueprint.js:
```
// SETTINGS!
var showgrid = true;
```

## Contributing
If you build your own units you think they belong to the default selection or you have suggestions to make the code better. I'll gladly recieve a pull-request.

## Note
I'm a Deisgner and Frontend-Developer, mainly writing HTML/CSS and some Frontend jQuery. Don't judge me for my javascript code! :)




[1](http://getbootstrap.com/)
[2](https://github.com/janl/mustache.js)
[3](https://jqueryui.com/)
[4](http://yeoman.io)
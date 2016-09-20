# SOLVED!

I needed to import `Ng2BootstrapModule` into every sub-`NgModule` that uses it - rather than just the main root `NgModule`.

Repo updated with the fix.

# Problem getting ng2-bootstrap to work in angular2-seed

This repo is a fork of [https://github.com/mgechev/angular2-seed](https://github.com/mgechev/angular2-seed) with [https://github.com/valor-software/ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) added.

However it doesn't work because the ng2-bootstrap elements are not recognised by Angular which results in errors like this:


```
zone.js?1474384853974:344 Unhandled Promise rejection: Template parse errors:
'tab' is not a known element:
1. If 'tab' is an Angular component, then verify that it is part of this module.
2. If 'tab' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message. ("

<tabset>
  [ERROR ->]<tab>1</tab>
  <tab>2</tab>
</tabset>
"): HomeComponent@14:2
'tab' is not a known element:
1. If 'tab' is an Angular component, then verify that it is part of this module.
2. If 'tab' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message. ("
<tabset>
  <tab>1</tab>
  [ERROR ->]<tab>2</tab>
</tabset>
"): HomeComponent@15:2
```

## Try it

    $ npm i
    $ npm start

Check the console.


## What have I done?

Installed ng2-bootstrap with npm:

    $ npm install ng2-bootstrap --save


Updated the SYSTEM config here: `tools/config/project.config.ts`

```
this.SYSTEM_CONFIG_DEV.paths['ng2-bootstrap'] =
  `${this.APP_BASE}node_modules/ng2-bootstrap/ng2-bootstrap.js`;

this.SYSTEM_BUILDER_CONFIG.packages['ng2-bootstrap'] = {
    main: 'ng2-bootstrap.js',
    defaultExtension : 'js'
};
```

Imported `Ng2BootstrapModule` into the `NgModule` in `src/client/app/app.module.ts` 

And finally added some basic tabs to the home component HTML:

````
<tabset>
  <tab>1</tab>
  <tab>2</tab>
</tabset>
````

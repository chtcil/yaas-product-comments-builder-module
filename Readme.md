# Yaas Product comments

This is a super simple YaaS builder module used to show small part of YaaS possibilities. 
This builder module is used as example for SAP Code Jam event in Munich.
It works with Product Comments service that can be also found on GitHub [https://github.com/nemanjapopovic/yaas-product-comments-server](https://github.com/nemanjapopovic/yaas-product-comments-server)

### Requirements

- Node.js
- Builder SDK CLI [https://devportal.yaas.io/tools/buildersdk/index.html](https://devportal.yaas.io/tools/buildersdk/index.html)

### Running

Just clone the repository and run `builder runModule` command.
This command will start https server at https://localhost:8081 and this can be used to reference builder module from local machine.
This makes developing easier as developer can see code changes immediatelly in builder.yaas.io.

### Deploying

In this repository there is `manifest.yml` file that is used to push this application to CF. When deploying please customize `manifest.yml` to suit your needs.
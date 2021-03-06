module.exports = {


  bind : function(app) {


    // main menu
    app.get('/', function(req, res, next) {

      var data = {doctitle: 'Main menu'};
      res.render('home', data);

    });


    // ELEMENTS


      // typography
      app.get('/elements/typography', function(req, res) {

        var data = {doctitle: 'Typography'};
        res.render('elements/typography/home', data);

      });


      // layout
      app.get('/elements/layout', function(req, res) {

        var data = {doctitle: 'Layout'};
        res.render('elements/layout/home', data);

      });


      // tables
      app.get('/elements/tables', function(req, res) {

        var data = {doctitle: 'Tables'};
        res.render('elements/tables/home', data);

      });


        // validation
        app.get('/elements/tables/validation', function(req, res) {

          var data = {doctitle: 'Table validation'};
          res.render('elements/tables/validation', data);

        });


      // forms
      app.get('/elements/forms', function(req, res) {

        var data = {doctitle: 'Forms'};
        res.render('elements/forms/home', data);

      });


        // your details
        app.get('/elements/forms/your-details', function(req, res) {

          var data = {doctitle: 'Your details'};
          res.render('elements/forms/your-details/home', data);

        });


        // where should we send your new passport
        app.get('/elements/forms/where-should-we-send-your-new-passport', function(req, res) {

          var data = {doctitle: 'Where should we send your new passport?'};
          res.render('elements/forms/where-should-we-send-your-new-passport/home', data);

        });


        // register for rural payments
        app.get('/elements/forms/register-for-rural-payments', function(req, res) {

          var data = {doctitle: 'Register for Rural Payments'};
          res.render('elements/forms/register-for-rural-payments/home', data);

        });


        // validation
        app.get('/elements/forms/form-validation', function(req, res) {

          var data = {doctitle: 'Form validation'};
          res.render('elements/forms/form-validation/home', data);

        });


      // details
      app.get('/elements/details', function(req, res) {

        var data = {doctitle: 'Details'};
        res.render('elements/details/home', data);

      });


      // alerts
      app.get('/elements/alerts', function(req, res) {

        var data = {doctitle: 'Alerts'};
        res.render('elements/alerts/home', data);

      });


      // dialogs
      app.get('/elements/dialogs', function(req, res) {

        var data = {doctitle: 'Dialogs'};
        res.render('elements/dialogs/home', data);

      });


      // collapsibles
      app.get('/elements/collapsibles', function(req, res) {

        var data = {doctitle: 'Collapsibles'};
        res.render('elements/collapsibles/home', data);

      });


      // checklist
      app.get('/elements/checklist', function(req, res) {

        var data = {doctitle: 'Checklist'};
        res.render('elements/checklist/home', data);

      });


        // checklist example
        app.get('/elements/checklist/example', function(req, res) {

          var data = {doctitle: 'Checklist example'};
          res.render('elements/checklist/example/home', data);

        });


      // tabs
      app.get('/elements/tabs', function(req, res) {

        var data = {doctitle: 'Tabs'};
        res.render('elements/tabs/home', data);

      });


      // snippets
      app.get('/elements/snippets', function(req, res) {

        var data = {
            doctitle: 'Snippets',
            prismScript: true
        };

        res.render('elements/snippets/home', data);

      });


      // Pagination
      app.get('/elements/pagination', function(req, res) {

        var data = {doctitle: 'Pagination'};
        res.render('elements/pagination/home', data);

      });


    // PAGES


      // my account
      app.get('/pages/my-account', function(req, res) {

        var data = {doctitle: 'My account'};
        res.render('pages/my-account/home', data);

      });


      // personal details
      app.get('/pages/personal-details', function(req, res) {

        var data = {doctitle: 'Personal details'};
        res.render('pages/personal-details/home', data);

      });


      // self assessment
      app.get('/pages/self-assessment', function(req, res) {

        var data = {doctitle: 'Self assessment'};
        res.render('pages/self-assessment/home', data);

      });


      // cross compliance
      app.get('/pages/cross-compliance', function(req, res) {

        var data = {doctitle: 'Cross compliance'};
        res.render('pages/cross-compliance/home', data);

      });


      // confirmation
      app.get('/pages/confirmation', function(req, res) {

        var data = {doctitle: 'Confirmation'};
        res.render('pages/confirmation/home', data);

      });


      // apply for bps
      app.get('/pages/apply-for-bps', function(req, res) {

        var data = {doctitle: 'Apply for BPS'};
        res.render('pages/apply-for-bps/home', data);

      });


      // amend business details
      app.get('/pages/amend-business-details', function(req, res) {

        var data = {doctitle: 'Amend business details'};
        res.render('pages/amend-business-details/home', data);

      });


      // bps application
      app.get('/pages/bps-application', function(req, res) {

        var data = {doctitle: 'BPS application'};
        res.render('pages/bps-application/home', data);

      });


      // manage land
      app.get('/pages/manage-land', function(req, res) {

        var data = {
          doctitle: 'Manage land',
          openLayers: true
        };

        res.render('pages/manage-land/home', data);

      });


        // manage land
        app.get('/pages/manage-land/fallow-field', function(req, res) {

          var data = {
            doctitle: 'Fallow field',
            openLayers: true
          };

          res.render('pages/manage-land/fallow-field/home', data);

        });


        // land use
        app.get('/pages/manage-land/fallow-field/land-use', function(req, res) {

          var data = {
            doctitle: 'Land use',
            openLayers: true
          };

          res.render('pages/manage-land/fallow-field/land-use/home', data);

        });


        // add feature
        app.get('/pages/manage-land/fallow-field/add-feature', function(req, res) {

          var data = {
            doctitle: 'Add feature',
            openLayers: true
          };

          res.render('pages/manage-land/fallow-field/add-feature/home', data);

        });


        // edit feature
        app.get('/pages/manage-land/fallow-field/edit-feature', function(req, res) {

          var data = {
            doctitle: 'Edit feature',
            openLayers: true
          };

          res.render('pages/manage-land/fallow-field/edit-feature/home', data);

        });


        // add feature details
        app.get('/pages/manage-land/fallow-field/add-feature-details', function(req, res) {

          var data = {
            doctitle: 'Add feature details',
            openLayers: true
          };

          res.render('pages/manage-land/fallow-field/add-feature-details/home', data);

        });


      // rural payments home
      app.get('/pages/home', function(req, res) {

        var data = {doctitle: 'Home'};
        res.render('pages/home/home', data);

      });


      // land query
      app.get('/pages/land-query', function(req, res) {

        var data = {doctitle: 'Land query'};

        var data = {
          doctitle: 'Land query',
          landScripts: true
        };

        res.render('pages/land-query/home', data);

      });


        // query
        app.get('/pages/land-query/query', function(req, res) {

          var data = {doctitle: 'Land query'};
          res.render('pages/land-query/query/home', data);

        });


        // query sbi
        app.get('/pages/land-query/query-sbi', function(req, res) {

          var data = {doctitle: 'Land query'};
          res.render('pages/land-query/query-sbi/home', data);

        });


      // rural payments
      app.get('/pages/rural-payments', function(req, res) {

        var data = {doctitle: 'Rural Payments'};
        res.render('pages/rural-payments/home', data);

      });


      // invalid or missing token
      app.get('/pages/invalid-or-missing-token', function(req, res) {

        var data = {doctitle: 'Invalid or missing token'};
        res.render('pages/invalid-or-missing-token/home', data);

      });


      // sign in
      app.get('/pages/signin', function(req, res) {

        var data = {doctitle: 'Signin'};
        res.render('pages/signin/home', data);

      });


      // forgotten your password
      app.get('/pages/forgotten-your-password', function(req, res) {

        var data = {doctitle: 'Forgotten your password'};
        res.render('pages/forgotten-your-password/home', data);

      });


      // need to change password
      app.get('/pages/need-to-change-password', function(req, res) {

        var data = {doctitle: 'Need to change password'};
        res.render('pages/need-to-change-password/home', data);

      });


      // scheme eligibility
      app.get('/pages/scheme-eligibility', function(req, res) {

        var data = {doctitle: 'Scheme eligibility'};
        res.render('pages/scheme-eligibility/home', data);

      });


      // confirm journey
      app.get('/pages/confirm-journey', function(req, res) {

        var data = {doctitle: 'Confirm journey'};
        res.render('pages/confirm-journey/home', data);

      });


        // personal details
        app.get('/pages/confirm-journey/personal-details', function(req, res) {

          var data = {doctitle: 'Personal details'};
          res.render('pages/confirm-journey/personal-details/home', data);

        });


        // your contact details
        app.get('/pages/confirm-journey/your-contact-details', function(req, res) {

          var data = {doctitle: 'Your contact details'};
          res.render('pages/confirm-journey/your-contact-details/home', data);

        });


        // your contact preferences
        app.get('/pages/confirm-journey/your-contact-preferences', function(req, res) {

          var data = {doctitle: 'Your contact preferences'};
          res.render('pages/confirm-journey/your-contact-preferences/home', data);

        });


        // check business details
        app.get('/pages/confirm-journey/check-business-details', function(req, res) {

          var data = {
            doctitle: 'Check business details',
            mapScripts: true,
            openLayers: true
          };

          res.render('pages/confirm-journey/check-business-details/home', data);

        });


        // amend business details
        app.get('/pages/confirm-journey/amend-business-details', function(req, res) {

          var data = {
            doctitle: 'Amend business details',
            mapScripts: true,
            openLayers: true
          };

          res.render('pages/confirm-journey/amend-business-details/home', data);

        });


        // additional business details
        app.get('/pages/confirm-journey/additional-business-details', function(req, res) {

          var data = {doctitle: 'Additional business details'};
          res.render('pages/confirm-journey/additional-business-details/home', data);

        });


        // people accountable
        app.get('/pages/confirm-journey/people-accountable', function(req, res) {

          var data = {doctitle: 'People accountable'};
          res.render('pages/confirm-journey/people-accountable/home', data);

        });


        // business details summary
        app.get('/pages/confirm-journey/business-details-summary', function(req, res) {

          var data = {
            doctitle: 'Business details summary',
            mapScripts: true,
            openLayers: true
          };

          res.render('pages/confirm-journey/business-details-summary/home', data);

        });


        // business overview
        app.get('/pages/confirm-journey/business-overview', function(req, res) {

          var data = {
            doctitle: 'Business overview',
            mapScripts: true,
            openLayers: true
          };

          res.render('pages/confirm-journey/business-overview/home', data);

        });


        // people accountable summary
        app.get('/pages/confirm-journey/people-accountable-summary', function(req, res) {

          var data = {doctitle: 'People accountable summary'};
          res.render('pages/confirm-journey/people-accountable-summary/home', data);

        });


      // business details
      app.get('/pages/business-details', function(req, res) {

        var data = {doctitle: 'Business details'};
        res.render('pages/business-details/home', data);

      });


        // amend business details
        app.get('/pages/business-details/amend-business-details', function(req, res) {

          var data = {doctitle: 'Amend business details'};
          res.render('pages/business-details/amend-business-details/home', data);

        });


      // angular
      app.get('/pages/angular', function(req, res) {

        var data = {
            doctitle: 'Angular directives',
            angularScripts: true
        };

        res.render('pages/angular/home', data);

      });


  }


};
define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/public/main.js",
    "group": "C__Users_jworent_SkillsUSA_web_design_contest_api_app_public_main_js",
    "groupTitle": "C__Users_jworent_SkillsUSA_web_design_contest_api_app_public_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Get upcomming Events",
    "name": "getEvents",
    "group": "Events",
    "examples": [
      {
        "title": "fetch() Example:",
        "content": "fetch('http://localhost:60606/events')\n    .then(function(response) {\n        return response.json();\n    })\n    .then(function(data) {\n        console.log(data);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });",
        "type": "json"
      },
      {
        "title": "jQuery.get() Example:",
        "content": "jQuery.get('http://localhost:60606/events')\n    .done(function(data) {\n        console.log(data);\n    })\n    .fail(function(error) {\n        console.log(error);\n    });",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>List of Locations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Location Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.location",
            "description": "<p>Description of location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.date",
            "description": "<p>Date (as a preformated string)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.time",
            "description": "<p>Time (as a preformated string)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    name: \"Location 1\",\n    location: \"10st & Lincoln Ave\",\n    date: \"Jun 5\",\n    time: \"11 AM - 1:30 PM\"\n  },\n  {\n    name: \"Location 2\",\n    location: \"Glen Park Fountain\",\n    date: \"Jun 6\",\n    time: \"5 PM - 10 PM\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/index.js",
    "groupTitle": "Events"
  }
] });

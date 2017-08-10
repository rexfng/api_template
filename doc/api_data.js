define({ "api": [  {    "type": "post",    "url": "/api/v1/auth",    "title": "POST",    "name": "Auth",    "group": "Auth_Service",    "description": "<p>Authenticate email and password pair and returning server side session. Also sets ssid to user cookie.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>unique email that represents the user's identity.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>composed of sha256 hashes of 16 bites of random salt + user choice of passphrase.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "{\n    \"is_authenticated\": true,\n    \"user\": {\n        \"id\": \"592a0fbf3f6e3d3a9665037f\",\n        \"_self\": \"http://localhost:3000/api/v1/user/592a0fbf3f6e3d3a9665037f\"\n    }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n  \"is_authenticated\": false\n}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Auth_Service"  },  {    "type": "delete",    "url": "/api/v1/session/:ssid",    "title": "DELETE",    "name": "Auth_Destroy_Session",    "group": "Auth_Service",    "description": "<p>Destroy server side session and clear SSID stores in cookies.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "ssid",            "description": "<p>after user being authenticated, the unique ssid found in cookies.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "{\n     \"ssid_destroyed\": true\n}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Auth_Service"  },  {    "type": "delete",    "url": "/api/v1/:type/:id",    "title": "DELETE One",    "name": "Data_Delete",    "group": "Data_Service",    "description": "<p>Delete and object based on its :type and :id</p>",    "version": "1.0.0",    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "delete",    "url": "/api/v1/:type",    "title": "DELETE All",    "name": "Data_Delete_All",    "group": "Data_Service",    "description": "<p>Delete all data from a :type</p>",    "version": "1.0.0",    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "get",    "url": "/api/v1/:type",    "title": "GET All",    "name": "Data_Get",    "group": "Data_Service",    "description": "<p>The Data Service is a dynamic api endpoint base on your data. By prior creating your own type by POST-ing to the same endpoint, you have access to the same type data</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "_id",            "description": "<p>The mongodb id of the data.</p>"          },          {            "group": "Parameter",            "type": "String/Object",            "optional": false,            "field": "value",            "description": "<p>Your custom key-value pair of your data.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "   [{\n     \"_id\": 5910dd5df5306e9b11ab4aef,\n\t\t \"key\": \"value\",\n\t\t \"key\": \"value\",\n\t\t \"key\": \"value\"\n   },{\n     \"_id\": 5910dd5df5306e9b11aef213,\n\t\t \"key\": \"value\",\n \t\t \"key\": \"value\",\n  \t\t \"key\": \"value\"\n   }]",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "get",    "url": "/api/v1/:type?",    "title": "GET ALL - Filter",    "name": "Data_Get_Filter",    "group": "Data_Service",    "description": "<p>Provide a query to filter results in a data type. ie. /api/v1/:type?first_name=Stephen&amp;last_name=Curry&amp;team=Golden+State</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "_id",            "description": "<p>The mongodb id of the data.</p>"          },          {            "group": "Parameter",            "type": "String/Object",            "optional": false,            "field": "value",            "description": "<p>Your custom key-value pair of your data.</p>"          }        ]      }    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "get",    "url": "/api/v1/:type/:id",    "title": "GET ONE",    "name": "Data_Id",    "group": "Data_Service",    "description": "<p>Get record by :id base on :type</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String/Object",            "optional": true,            "field": "value",            "description": "<p>Your custom key-value pair of your data.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "   {{\n     \"_id\": 5910dd5df5306e9b11ab4aef,\n\t\t \"key\": \"value\",\n\t\t \"key\": \"value\",\n\t\t \"key\": \"value\"\n   }}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "post",    "url": "/api/v1/:type",    "title": "POST",    "name": "Data_Post",    "group": "Data_Service",    "description": "<p>Creating data object base on type</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "value",            "description": "<p>Your custom key-value pair of your data.</p>"          }        ]      }    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "update",    "url": "/api/v1/:type/:id",    "title": "UPDATE",    "name": "Data_Update",    "group": "Data_Service",    "description": "<p>Updating key-value of a data object base on type and id</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "value",            "description": "<p>Your custom key-value pair of your data.</p>"          }        ]      }    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Data_Service"  },  {    "type": "post",    "url": "/api/v1/mailer",    "title": "POST",    "name": "Mailer",    "group": "Mailer_Service",    "description": "<p>Send an email via this endpoint. This endpoint is stateless and does not store the content of the information. Use x-www-form-urlencoded</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "to",            "description": "<p>the email address(es) you would like to send the email to.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "subject",            "description": "<p>The subject of the email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "text",            "description": "<p>The email message in plain text format.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "html",            "description": "<p>The email message in html format</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "    {{\n\t\t\t\"template\": \"< h1 >Hi {{first_name}}, thank you for signing up.< h1 >\", \n\t\t\t\"data_id\": \"5910dd5df5306e9b11aef213\", \n\t\t\t\"text\": \"Welcome Joe! Thank you for signing up. Please click this link ...\" \n\t\t\t\"html\": \"html codes\"\n    }}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Mailer_Service"  },  {    "type": "post",    "url": "/api/v1/sms",    "title": "POST",    "name": "SMS",    "group": "SMS_Service",    "description": "<p>Send an sms via this endpoint. This endpoint is stateless and does not store the content of the information.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "to",            "description": "<p>SMS is delivered to this phone number.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "body",            "description": "<p>Body of the SMS message.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "    {{\n\t\t\t\"to\": \"+16041234567\", \n\t\t\t\"body\": \"Welcome Joe! Thank you for signing up. Please text back the 4 digit verification code\" \n    }}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "SMS_Service"  },  {    "type": "get",    "url": "/api/v1/shortid",    "title": "GET ONE",    "name": "Short_ID_Get",    "group": "Short_ID_Gen",    "description": "<p>The Service generates a unique 7 characters string from A-Z, a-z, 0-9, _- Please note it does not contain time information and cannot be sorted. This endpoint is a wrapper of https://github.com/dylang/shortid</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "uuid",            "description": "<p>Contains the unique generated id.</p>"          }        ]      },      "examples": [        {          "title": "Return example:",          "content": "{\n  uuid: \"rJPHBSzD-\"\n}",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Short_ID_Gen"  },  {    "type": "post",    "url": "/api/v1/user",    "title": "POST",    "name": "User",    "group": "User_Service",    "description": "<p>Creating User Model.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>takes any client side hashes mixing with server side salts and store them in the database along side with any other key-values provided along this POST request.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "key",            "description": "<p>any other key-value pairs.</p>"          }        ]      }    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "User_Service"  },  {    "type": "websocket",    "url": "/api/v1/",    "title": "Websocket",    "name": "Websocket",    "group": "Websocket_Service",    "description": "<p>Providing wrapper for API AI. Websocket is setup to use socket.io</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "method",            "description": "<p>&quot;join&quot;, &quot;emit&quot; or &quot;broadcast&quot;</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "on",            "description": "<p>listener name.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "room",            "description": "<p>socket io specific room name</p>"          },          {            "group": "Parameter",            "type": "boolean",            "optional": false,            "field": "is_save",            "description": "<p>Whether you would wish to save the websocket data to database. After being saved, you can access that data via the type end point using Data Service.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "type",            "description": "<p>the Data type you choose to save the if is_save equals to true.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "data",            "description": "<p>custom JSON Object you would like to send to socket.io.</p>"          }        ]      },      "examples": [        {          "title": "example to pass to socket.emit function:",          "content": "var socket = io.connect('http://localhost:3000/');\nsocket.on('connect', function(room){\n\tconsole.log('CLIENT: connect');\n})\n\tsocket.emit('emit', \n\t\t{\n\t\t\tmethod: \"join\",\n\t\t\troom: \"1234567\",\n\t\t}\n\t)\nsocket.emit('emit', \n\t{\n\t\tmethod: \"emit\",\n\t\ton: \"Typing\",\n\t\ttype: \"conversation\",\n\t\tis_save: true,\n\t\tdata: {\n\t\t\tmessage: message.value,\n\t\t\tname: handle.value,\n\t\t\tuser: {\n\t\t\t\tuser_id: \"592a0fbf3f6e3d3a9665037f\",\n\t\t\t\t_self: \"http://localhost:3000/api/v1/user/592a0fbf3f6e3d3a9665037f\"\n\t\t\t},\n\t\t\troom_id: \"1234567\"\n\t\t}\n\t}\n)\nsocket.on('Typing', function(data){\n\tconversation.innerHTML += '<li><strong>' + data.name +'</strong>' + data.message + '</li>';\n})",          "type": "json"        }      ]    },    "filename": "apidoc/_doc-v1.0.0.js",    "groupTitle": "Websocket_Service"  }] });

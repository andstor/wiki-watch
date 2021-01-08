report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Innforing_i_dannelse_0_document_0_phone.png",
        "test": "../bitmaps_test/20210101-151133/backstop_default_Innforing_i_dannelse_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Innforing_i_dannelse_0_document_0_phone.png",
        "label": "Innforing i dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/blackboard/execute/launcher?type=Course&id=_8415_1&url=",
        "expect": 0,
        "viewportLabel": "phone",
        "error": "Reference file not found /Users/andrestorhaug/Programming/Projects/wiki-watch/my-app/backstop_data/bitmaps_reference/backstop_default_Innforing_i_dannelse_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Innforing_i_dannelse_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210101-151133/backstop_default_Innforing_i_dannelse_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Innforing_i_dannelse_0_document_1_tablet.png",
        "label": "Innforing i dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/blackboard/execute/launcher?type=Course&id=_8415_1&url=",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/andrestorhaug/Programming/Projects/wiki-watch/my-app/backstop_data/bitmaps_reference/backstop_default_Innforing_i_dannelse_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_dannelse_0_document_0_phone.png",
        "test": "../bitmaps_test/20210101-151133/backstop_default_dannelse_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_dannelse_0_document_0_phone.png",
        "label": "dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -264
          },
          "misMatchPercentage": "24.62",
          "analysisTime": 57
        },
        "diffImage": "../bitmaps_test/20210101-151133/failed_diff_backstop_default_dannelse_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_dannelse_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210101-151133/backstop_default_dannelse_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_dannelse_0_document_1_tablet.png",
        "label": "dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.75",
          "analysisTime": 65
        },
        "diffImage": "../bitmaps_test/20210101-151133/failed_diff_backstop_default_dannelse_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});
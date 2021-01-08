report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_0_phone.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_0_phone.png",
        "label": "Blackboard - Videokonferanse med Collaborate Ultra",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/collab-ultra/tool/collabultra?course_id=_8415_1&mode=view",
        "expect": 0,
        "viewportLabel": "phone",
        "error": "Reference file not found /home/runner/work/wiki-watch/wiki-watch/backstop_data/bitmaps_reference/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_1_tablet.png",
        "label": "Blackboard - Videokonferanse med Collaborate Ultra",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/collab-ultra/tool/collabultra?course_id=_8415_1&mode=view",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /home/runner/work/wiki-watch/wiki-watch/backstop_data/bitmaps_reference/backstop_default_Blackboard_-_Videokonferanse_med_Collaborate_Ultra_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Innfring_i_dannelse_0_document_0_phone.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_Innfring_i_dannelse_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Innfring_i_dannelse_0_document_0_phone.png",
        "label": "Innføring i dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/blackboard/execute/launcher?type=Course&id=_8415_1&url=",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.19",
          "analysisTime": 48
        },
        "diffImage": "../bitmaps_test/20210108-181127/failed_diff_backstop_default_Innfring_i_dannelse_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Innfring_i_dannelse_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_Innfring_i_dannelse_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Innfring_i_dannelse_0_document_1_tablet.png",
        "label": "Innføring i dannelse",
        "misMatchThreshold": 0.1,
        "url": "https://ntnu.blackboard.com/webapps/blackboard/execute/launcher?type=Course&id=_8415_1&url=",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.13",
          "analysisTime": 79
        },
        "diffImage": "../bitmaps_test/20210108-181127/failed_diff_backstop_default_Innfring_i_dannelse_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210108-181127/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ]
});
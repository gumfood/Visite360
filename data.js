var APP_DATA = {
  "scenes": [
    {
      "id": "0-toilette-pmr",
      "name": "TOILETTE PMR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7447553123664523,
          "pitch": 0.15395160588913903,
          "rotation": 0,
          "target": "2-salle-d-attente"
        },
        {
          "yaw": -3.0284628894091163,
          "pitch": 0.6321642195705337,
          "rotation": 0,
          "target": "4-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salle-reunion",
      "name": "SALLE REUNION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8511785745839404,
        "pitch": 0.15172755039482055,
        "fov": 1.4688428655418002
      },
      "linkHotspots": [
        {
          "yaw": -2.575531838341167,
          "pitch": 0.3671714084334248,
          "rotation": 0,
          "target": "4-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salle-d-attente",
      "name": "SALLE D ATTENTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.347256358337127,
          "pitch": -0.1093944132467417,
          "rotation": 0,
          "target": "1-salle-reunion"
        },
        {
          "yaw": 2.3590649548279625,
          "pitch": 0.2421974500742774,
          "rotation": 5.497787143782138,
          "target": "4-hall-1"
        },
        {
          "yaw": 2.627235083193682,
          "pitch": -0.042989336503604036,
          "rotation": 0,
          "target": "0-toilette-pmr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall-2",
      "name": "HALL 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06132927980770475,
          "pitch": 0.02478114669046505,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 1.0179223978847816,
          "pitch": 0.0994362941550424,
          "rotation": 0,
          "target": "6-bureau-3"
        },
        {
          "yaw": -0.9216004385048713,
          "pitch": 0.2989448495123952,
          "rotation": 0,
          "target": "4-hall-1"
        },
        {
          "yaw": 2.824581034104332,
          "pitch": 0.5212938940656642,
          "rotation": 0,
          "target": "7-bureau-2-balcon"
        },
        {
          "yaw": -1.156139615315567,
          "pitch": 0.5140133520017542,
          "rotation": 5.497787143782138,
          "target": "8-bureau-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall-1",
      "name": "HALL 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.097461853531337,
          "pitch": 0.41502716504901294,
          "rotation": 0,
          "target": "3-hall-2"
        },
        {
          "yaw": 0.2147476507701711,
          "pitch": 0.009401584911353567,
          "rotation": 6.283185307179586,
          "target": "1-salle-reunion"
        },
        {
          "yaw": -0.3561998373568862,
          "pitch": 0.19875403600946484,
          "rotation": 4.71238898038469,
          "target": "0-toilette-pmr"
        },
        {
          "yaw": 0.3420392581190015,
          "pitch": 0.18811632777386755,
          "rotation": 1.5707963267948966,
          "target": "2-salle-d-attente"
        },
        {
          "yaw": 2.8951766045240657,
          "pitch": 0.011934647379652219,
          "rotation": 0,
          "target": "8-bureau-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cuisine",
      "name": "CUISINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9114447999602895,
          "pitch": 0.4775028029764936,
          "rotation": 0,
          "target": "3-hall-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bureau-3",
      "name": "BUREAU 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6015439809068592,
          "pitch": 0.05020266123959871,
          "rotation": 0,
          "target": "3-hall-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bureau-2-balcon",
      "name": "BUREAU 2 BALCON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.811369401671115,
          "pitch": -0.10456516468123489,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 2.6865973891853674,
          "pitch": 0.198343749841694,
          "rotation": 4.71238898038469,
          "target": "3-hall-2"
        },
        {
          "yaw": 2.930511601381463,
          "pitch": 0.21300704393364178,
          "rotation": 1.5707963267948966,
          "target": "6-bureau-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bureau-1",
      "name": "BUREAU 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9825885081799495,
          "pitch": 0.367827590874203,
          "rotation": 0,
          "target": "3-hall-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

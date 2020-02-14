---
layout: page
title: "NavTree Node նկարագրություն"
---

# Ուղղորդիչ ժառի հանգույցի նկարագրություն

Ուղղորդիչ ժառի հանգույցը կա՛մ խմբավորող ծնող հանգույց է, կա՛մ հղում է, որը աշխատացնելու դեպքում կարող է բացվել նոր փաստաթուղթ կամ թղթապանակ կամ աշխատել որևէ ծրագրային ֆունկցիա։

## Շարահյուսություն

``` as4x
Node {
    Caption = sCaption;  
    ECaption = sECaption;
    Ref = sRef;
    Formula = sFormula; 
    Icon = sIcon;  
};
```

| Պարամետր | Նկարագրություն |
|--|--|
| sCaption | Հանգույցի անվանումը։ |
| sECaption | Հանգույցի անվանումը օտար լեզվով։ |
| sRef | Ուղղորդիչ ծառի միջի հղում։ Հղումը բաղկացած է նախդիրից և կանչվող օբյեկտի ներքին անունից։ |
| sFormula | Հանգույցի ակտիվացման բանաձև, որով որոշվում է հանգույցի ցույց տալը։ Չլրացնելու դեպքում հանգույցը միշտ երևում է։  |
| sIcon | Հանգույցի պատկերակը։ Կիրառելի են ծրագրի ռեսուրսների ֆայլից(\*.res) Bitmap(\*.bmp) ձևաչափով նկարները։ |

## Կարգավորումներ

`Ref`-ի նախդիրները կարող են լինել հետրևյալ արժեքներից՝
        
| Արժեք | Նկարագրություն |
|--|--|
| N1 | New document |
| N2 | Repeatable new document |
| B1 | View |
| B2 | Tree |
| B3 | Report |
| V1 | Visual report |
| UR | User report |
| OL | Olap |
| RT | Reference |


Հանգույցի պատկերակը կարող է լինել հետևյալ արժեքներից կամ այլ նկար ռեսուրսների ֆայլից(\*.res)՝
        
| Արժեք | Նկարագրություն |
|--|--|
| Arm |  ![ARM.gif (257 bytes)](../../IMAGES/ARM.GIF) |
| Adm |  ![ADM.gif (257 bytes)](../../IMAGES/ADM.GIF) |
| Columns |  ![COLUMNS.gif (257 bytes)](../../IMAGES/COLUMNS.GIF) |
| Dialog |  ![DIALOG.gif (257 bytes)](../../IMAGES/DIALOG.GIF) |
| Folder |  ![FOLDER.gif (257 bytes)](../../IMAGES/FOLDER.GIF) |
| List |  ![LIST.gif (257 bytes)](../../IMAGES/LIST.GIF) |
| New |  ![NEW.gif (257 bytes)](../../IMAGES/NEW.GIF) |
| Node |  ![NODE.gif (257 bytes)](../../IMAGES/NODE.GIF) |
| RefTree |  ![REFTREE.gif (257 bytes)](../../IMAGES/REFTREE.GIF) |
| User |  ![USER.gif (257 bytes)](../../IMAGES/USER.GIF) |
| ... |  |

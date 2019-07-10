---
layout: page
title: "AsDataDesc օբյեկտ" 
---


# Դինամիկ տվյալների աղբյուր օբյեկտ 

Ի տարբերություն սովորական տվյալների աղբյուրի դինամիկ տվյալների աղբյուրը ձևավորվում է ծրագրի կատարման ընթացքում այլ ոչ թե նկարագրված է նախօրոք։ 

Այն լինում է SQL հարցումով հաշվարկվող կամ մասիվի վրա հիմնված։

AsDataDesc օբյեկտը ստեղծվում է [CreateDataDesc](Functions/InterfaceManagment/CreateDataDesc.html) ֆունկցիայի միջոցով։



| Հատկություններ | Նկարագրություն |
|--|--|
| [ArrayDB](AsDataDesc/ArrayDB_DDesc.md) | Վերադարձնում կամ նշանակում է դինամիկ տվյալների աղբյուրի արժեքների մասիվը։ |
| [Caption](AsDataDesc/Caption_DDesc.md) | Վերադարձնում կամ նշանակում է դինամիկ տվյալների աղբյուրի անվանումը։ |
| [Columns](AsDataDesc/Columns_DDesc.md) | Վերադարձնում է ավելացվող սյունակների մասիվը։ |
| [DataIndicate](AsDataDesc/DataIndicate_DDesc.md) | Վերադարձնում կամ նշանակում է հաշվարկվող դինամիկ տվյալների աղբյուրի կատարման ընթացքի [ցուցադրման ձևը](../Constants/const_opencursor_Indicate.html)։ |
| [DefaultFunction](AsDataDesc/DefaultFunction_DDesc.md) | Վերադարձնում կամ նշանակում է կոնտեկստ մենյուի մեջ լռությամբ աշխատող գործողությունը։ |
| [ECaption](AsDataDesc/ECaption_DDesc.md) | Վերադարձնում կամ նշանակում է  դինամիկ տվյալների աղբյուրի անվանումը օտար լեզվով։ |
| [HeadLinesCount](AsDataDesc/HeadLinesCount_DDesc.md) | Վերադարձնում կամ նշանակում է այն տողերի քանակը, որքան նախատեսված է սյունակների անվանումները ցույց տալու համար։ |
| [IndexOfFolderId](AsDataDesc/IndexOfFolderId_DDesc.md) | Վերադարձնում կամ նշանակում է սյունակի համարը fFOLDERID դաշտով։ |
| [IndexOfIsn](AsDataDesc/IndexOfIsn_DDesc.md) | Վերադարձնում կամ նշանակում է սյունակի համարը fISN դաշտով։ |
| [Name](AsDataDesc/Name_DDesc.md) | Վերադարձնում կամ նշանակում է  դինամիկ տվյալների աղբյուրի ներքին անունը։ |
| [Param](AsDataDesc/Param_DDesc.md) | Վերադարձնում կամ նշանակում է պարամետրերի արժեքները։ |
| [SQL](AsDataDesc/SQL_DDesc.md) | Վերադարձնում կամ նշանակում է դինամիկ տվյալների աղբյուրի SQL հարցման տեքստը։ |
| [UpdateSQL](AsDataDesc/UpdateSQL_DDesc.md) | Վերադարձնում կամ նշանակում է SQL հարցման տեքստը դինամիկ տվյալների աղբյուրի թարմացման համար։  |



| Մեթոդներ | Նկարագրություն |
|--|--|
| [AddColumn](AsDataDesc/AddColumn_DDesc.md) | Ավելացնում է սյունակ  դինամիկ տվյալների աղբյուրի համար։ |
| [AddParam](AsDataDesc/AddParam_DDesc.md) | Ավելացնում է պարամետր դինամիկ տվյալների աղբյուրի SQL հարցման մեջ օգտագործելու համար։ |
| [GetParIndex](AsDataDesc/GetParINdex_DDesc.md) | Վերադարձնում է պարամետրի համարը նշված անունով։ |
| [RegistrFunction](AsDataDesc/RegistrFunction_DDesc.md) | Կոնտեկստ մենյուի մեջ ավելացնում է նոր գործողություն։ |
| [RegistrNode](AsDataDesc/RegistrNode_DDesc.md) | Կոնտեկստ մենյուի մեջ ավելացնում է ենթամենյուի ծնող հանգույց։ |
| [RemoveColumn](AsDataDesc/RemoveColumn_DDesc.md) | Դինամիկ տվյալների աղբյուրից հեռացնում է սյունակը։ |
| [RemoveParam](AsDataDesc/RemoveParam_DDesc.md) | Դինամիկ տվյալների աղբյուրից հեռացնում է պարամետրը։ |
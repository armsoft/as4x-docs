---
layout: page
title: "AsData օբյեկտ"
---


# Տվյալների աղբյուր օբյեկտ

Տվյալների աղբյուրը պետք է համակարգում [նախօրոք նկարագրված](../Defs/Data.html) լինի։ Այն բեռնվում է [Data](Functions/SysDefManagment/Data.html) ֆունկցիայի միջոցով։

Տվյալների աղբյուրի միջոցով հնարավոր է կարդալ աղյուսակային տվյալները տող առ տող։ Աղյուսակային տվյալները կարող են ստացված լինել SQL հարցումով կամ լինել հիշողության մեջ բեռնված երկչափ մասիվ (XArrayDB)։ 

AsData-ի նախնական պարամետրերը լրացնելուց հետո պետք է կանչել [OpenCursor](ASDATA/OpenCursor.md) մեթոդը, որից հետո բացվում է նշորդ (Cursor) աղյուսակային տվյալների (առաջին տողի) վրա։ 

| Հատկություններ | Նկարագրություն |
|--|--|
| [ArrayBased](ASDATA/ArrayBased.md) | Ցույց է տալիս, արդյոք տվյալների աղբյուրը հիմնված է մասիվի (XArrayDB) վրա։ |
| [Caption](ASDATA/Caption.md) | Վերադարձնում է տվյալների աղբյուրի անվանումը։ |
| [CurrentIndicate](ASDATA/CurrentIndicate.md) | Վերադարձնում է հաշվարկվող տվյալների աղբյուրի կատարման ընթացքի [ցուցադրման ձևը](../Constants/const_opencursor_Indicate.html)։ |
| [CursorRowCount](ASDATA/CursorRowCount.md) | Վերադարձնում է տողերի քանակը բաց տվյալների աղբյուրի մեջ։ |
| [DColCount](ASDATA/DColCount.md) | Վերադարձնում է սյունակների քանակը տվյալների աղբյուրի մեջ։ |
| [DefaultIndicate](ASDATA/DefaultIndicate.md) | Վերադարձնում է տվյալների աղբյուրի կատարման ընթացքի նկարագրության մեջ սահմանված [ցուցադրման ձևը](../Constants/const_opencursor_Indicate.html)։ |
| [DisableValidFunction](ASDATA/DisableValidFunction.md) | Անջատում է [Valid](../ScriptProcs/Valid_Data.html) իրադարձությունը։ |
| [DParCount](AsData/DParCount.md) | Վերադարձնում է տվյալների աղբյուրի պարամետրի քանակը։ |
| [ECaption](ASDATA/ECaption.md) | Վերադարձնում է տվյալների աղբյուրի անվանումը օտար լեզվով։ |
| [EOF](ASDATA/EOF.md) | Ցույց է տալիս տվյալների վերջին հասած լինելը (նշորդով կարդալու ժամանակ)։ |
| [IndicateCaption](ASDATA/IndicateCaption.md) | Վերադարձնում կամ նշանակում է ընթացագոտու պատուհանի գլխագիրը։  |
| [Name](ASDATA/Name.md) | Վերադարձնում է տվյալների աղբյուրի ներքին անունը։ |
| [Parameters](ASDATA/Parameters.md) | Վերադարձնում կամ նշանակում է պարամետրերի արժեքները։ |
| [SQL](ASDATA/SQL.md) | Վերադարձնում է տվյալների աղբյուրի SQL հարցման տեքստը, որը գրված է [նկարագրության մեջ](../Defs/Data.html), բայց ոչ [SQL](../ScriptProcs/SQL.html) իրադարձության ժամանակ հաշվարկված հարցման տեքստը։ |
| [UpdateSql](ASDATA/UpdateSQL.md) | Վերադարձնում է SQL հարցման տեքստը տվյալների աղբյուրի թարմացման համար, որը գրված է [նկարագրության մեջ](../Defs/Data.html), բայց ոչ [SQL](../ScriptProcs/SQL.html) իրադարձության ժամանակ հաշվարկված հարցման տեքստը։ |



| Մեթոդներ | Նկարագրություն |
|--|--|
| [ClearParameters](ASDATA/ClearParameters.md) | Մաքրում է տվյալների աղբյուրի պարամետրերի ցուցակը: |
| [CloseCursor](ASDATA/CloseCursor.md) | Փակում է տվյալների աղբյուրի բաց նշորդը։ |
| [CloseUpdateCursor](ASDATA/CloseUpdateCursor.md) |  Փակում է տվյալների աղբյուրի թարմացնող բաց նշորդը։ |
| [Formatted](ASDATA/Formatted.md) | Վերադարձնում է ընթացիկ տողում սյունակի արժեքը տողայնացված։ |
| [MoveFirst](ASDATA/MoveFirst.md) | Նշորդը տեղափոխում է բաց տվյալների աղբյուրի առաջին տողի վրա։ |
| [MoveLast](ASDATA/MoveLast.md) | Նշորդը տեղափոխում է բաց տվյալների աղբյուրի վերջին տողի վրա։ |
| [MoveNext](ASDATA/MoveNext.md) | Նշորդը տեղափոխում է բաց տվյալների աղբյուրի հաջորդ տողի վրա։ |
| [MovePrevious](ASDATA/MovePrevious.md) | Նշորդը տեղափոխում է բաց տվյալների աղբյուրի նախորդ տողի վրա։ |
| [OpenCursor](ASDATA/OpenCursor.md) | Բացում է նշորդ  տվյալների աղբյուրի աղյուսակային տվյալների վրա։ |
| [OpenUpdateCursor](ASDATA/OpenUpdateCursor.md) | Բացում է նշորդ  տվյալների աղբյուրի թարմացման համար։ |
| [RSColValue](ASDATA/RSColValue.md) | Վերադարձնում է տվյալների աղբյուրի SQL հարցումով բացված ներքին rdoResultset-ի սյունակի արժեքը։ |
| [Value](ASDATA/Value.md) | Վերադարձնում է ընթացիկ տողում սյունակի արժեքը։ |




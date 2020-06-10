---
layout: page
title: "TemplateSubstitution օբյեկտ"
---

# Ձևանմուշի տեղադրվող արժեքների բազմության օբյեկտ

TemplateSubstitution օբյեկտը տպելու ձևանմուշի լրացման արժեքների բազմություն է։

Ձևանմուշները կարող են լինել հետևյալ տիպերի՝
* `0` - MS Word (*.doc)
* `1` - MS Excel (*.xls)
* `2` - MS Word-ի Open XML (*.docx)
* `3` - MS Excel-ի Open XML (*.xlsm)
* `7` - HyperText Markup Language (*.htm)
* `8` - MS Excel-ի Open XML (*.xlsx)
* `9` - Տեքստային ֆայլ (*.txt)
* `A` - PDF (HTML-ից)
* `B` - PDF ստորագրություն (HTML-ից)

| Հատկություններ | Նկարագրություն |
|--|--|
| [Doc](TemplateSubstitution/Doc.md) | Բազմությանը հիմնական փաստաթուղթը։ |
| [Grid](TemplateSubstitution/Grid.md) | Վերադարձնում է [տեղադրվող աղյուսակը](TemplateSubstitutionGrid.md) ըստ անունի։ |
| [Image](TemplateSubstitution/Image.md) | Վերադարձնում է տեղադրվող նկարը ըստ անունի։ |
| [Value](TemplateSubstitution/Value.md) | Վերադարձնում է տեղադրվող ատոմար արժեքը ըստ անունի։ |

| Մեթոդներ | Նկարագրություն |
|--|--|
| [Add](TemplateSubstitution/Add.md) | Բազմության մեջ ավելացնում է տեղադրվող ատոմար արժեք։ |
| [AddGrid](TemplateSubstitution/AddGrid.md) | Բազմության մեջ ավելացնում է [տեղադրվող աղյուսակ](TemplateSubstitutionGrid.md)։ |
| [AddGridValuesFromDoc](TemplateSubstitution/AddGridValuesFromDoc.md) | Բազմության մեջ ավելացնում է [տեղադրվող աղյուսակ](TemplateSubstitutionGrid.md) և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։ |
| [AddGridsValuesFromDoc](TemplateSubstitution/AddGridsValuesFromDoc.md) | Բազմության մեջ ավելացնում է [տեղադրվող աղյուսակ](TemplateSubstitutionGrid.md) և լրացնում դրանք ըստ փաստաթղթի բոլոր աղյուսակների։ |
| [AddImage](TemplateSubstitution/AddImage.md) | Բազմության մեջ ավելացնում է [տեղադրվող նկար](TemplateSubstitutionImage.md)։ |
| [AddRekvValuesFromDoc](TemplateSubstitution/AddRekvValuesFromDoc.md) | Բազմության մեջ ավելացնում է տեղադրվող ատոմար արժեքներ ըստ փաստաթղթի բոլոր դաշտերի անունների և արժեքների։ |
| [ExistsGrid](TemplateSubstitution/ExistsGrid.md) | Ստուգում է տեղադրվող աղյուսակի առկայությունը։ |
| [ExistsImage](TemplateSubstitution/ExisitsImage.md) | Ստուգում է տեղադրվող նկարի առկայությունը։ |
| [SubstituteToTemplate](TemplateSubstitution/SubstituteToTemplate.md) | Տեղադրում է արժեքները ձևանմուշի մեջ։ |
| [SubstituteToTemplateAndShow](TemplateSubstitution/SubstituteToTemplateAndShow.md) | Տեղադրում է արժեքները ձևանմուշի մեջ և բացում է վերջնական ֆայլը։ |

---
layout: page
title: "TemplateSubstitution օբյեկտ"
---

# TemplateSubstitution օբյեկտ

TemplateSubstitution օբյեկտը նախատեսված է տպելու ձևանմուշի տեղադրման արժեքների  նկարագրության համար։ Տեղադրման արժեքների մեջ կարող են լինել հետևյալ ձևանմուշների տիպետը՝

Объект TemplateSubstitution предназначен для описания подстановок в шаблоны печати. В подстановки могут быть осуществлены в следущие типы шаблонов:

0    -    Microsoft Word  (.doc)

1    -    Microsoft Excel (.xls)

2    -    MS Word Open XML (.docx)

3    -    MS Excel Open XML (.xlsm)

4    -    PDF (.pdf)

5    -    Open Document Text (.odt)

6    -    Open Document Spreadsheet (*.ods)





| Մեթոդներ | Նկարագրություն |
|--|--|
| [Add](TemplateSubstitution/Add.md) | Ավելացնում է ատոմար տեղադրման արժեք։ Добавляет атомарную подстановку. |
| [AddGrid](TemplateSubstitution/AddGrid.md) | Ավելացնում է [աղյուսակային տեղադրման արժեք](TemplateSubstitutionGrid.html)։<p>Добавляет [табличную подстановк](TemplateSubstitutionGrid.html)у.</p> |
| [AddGridValuesFromDoc](TemplateSubstitution/AddGridValuesFromDoc.md) | Ավելացնում է աղյուսակային տեղադրման արժեք և նրա մեջ պատճենում փաստաթղթի տվյալները և աղյուսակները։ <p>Добавляет табличную подстановку и копирует в нее данные и грид-таблицы документа.</p> |
| [AddGridsValuesFromDoc](TemplateSubstitution/AddGridsValuesFromDoc.md) | Փաստաթղթի յուրաքանչյուր աղյուսակի համար ստեղծվում են աղյուսակային տեղադրման արժեքներ։ Որենք և ունենում են նույն նույն անվանումները և պարունակում են նույն տվյալները։  Для всех грид-таблицы документа создаются табличные подстановки. Созданные табличные подстановки имеют те же именна и содержат то же данные. |
| [AddImage](TemplateSubstitution/AddImage.md) | Ավելացնում է [պատկերի տեղադրման արժեք](TemplateSubstitutionImage.html)։  Добаляет 	[подстановку изображения](TemplateSubstitutionImage.html). |
| [AddRekvValuesFromDoc](TemplateSubstitution/AddRekvValuesFromDoc.md) | Փաստաթղթի բոլոր դաշտերի արժեքներին ավելացնում է որպես ատոմար տեղադրման արժեք։ <p>Добавляет значения всех реквизитов документа в качестве атомарных подстановок.</p> |
| [ExistsGrid](TemplateSubstitution/ExistsGrid.md) | Ստուգում է աղյուսակային  տեղադրման արժեքի առկայությունը։ <p>Поверяет существование табличной подстановки.</p> |
| [ExistsImage](TemplateSubstitution/ExisitsImage.md) | Ստուգում է պատկեր տեղադրման արժեքի առկայությունը։ Поверяет существование подстановки изображения. |
| [Grid](TemplateSubstitution/Grid.md) | Վերադարձնում է աղյուսակային տեղադրման արժեքը ըստ անվանման։ Возвращает табличную подстановку по имени. |
| [Image](TemplateSubstitution/Image.md) |Վերադարձնում է պատկեր տեղադրման արժեքը ըստ անվանման։ Возвращает подстановку изображения по имени. |
| [SubstituteToTemplate](TemplateSubstitution/SubstituteToTemplate.md) | Տեղադրում է արժեքները ձևանմուշի մեջ։ Осуществляет подстановку в шаблон печати. |
| [SubstituteToTemplateAndShow](TemplateSubstitution/SubstituteToTemplateAndShow.md) | Տեղադրում է արժեքները ձևանմուշի մեջ և ցույց տալիս արդյունքը։ Осуществляет подстановку в шаблон печати и показывает результат. |




---
layout: page
title: "Import Files/Parameter"
---

# Համակարգային պարամետրի ներմուծվող տեքստային ֆայլերի նկարագրություն 

[См. также](../Import_Files.md) Пример [Применяется к](../Import_Files.md)

## Շարահյուսություն
```
#AS3XX# EXPORT-IMPORT DATA FILE

PARAMETER {
PARAMID:paramId1
TYPE:paramType1
VALUETYPE:paramValueType1
VALUE:paramValue1
DESCRIPTION:paramDescr1
EDESCRIPTION:paramEDescr1
PERMANENT:paramPermanent1
GROUP:paramGroup1
UPDATEACCESS:paramUpdateAccess1
MEMO:paramMemo1
}

PARAMETER {
PARAMID:paramId2
TYPE:paramType2
VALUETYPE:paramValueType2
VALUE:paramValue2
DESCRIPTION:paramDescr2
EDESCRIPTION:paramEDescr2
PERMANENT:paramPermanent2
GROUP:paramGroup2
UPDATEACCESS:paramUpdateAccess2
MEMO:paramMemo2
}
```

|  Հատկություններ | Նկարագրություն |
|--|--|
| paramId | Պարամետրի ներքին անունը, առավելագույն երկարությունը 20 նիշ է։ |
| paramType | Պարամետրի տեսակը։ Ստանում է 0 կամ 1 արժեք։ 0 արժեքի դեպքում պարամետրի արժեքը միակն է։ 1 արժեքի դեպքում պարամետրի արժեքը ըստ օգտագործողի է։|
| paramValueType | Պարամետրի արժեքի [ներքին տեսակը](../types.html)։ |
| paramValue | Պարամետրի արժեքը, կարող է չթոխանցվել, երբ պարամետրը առկա է համակարգում և արժեքը փոխել պետք չէ։ |
| paramDescr| Պարամետրի նկարագրությունը։ |
| paramEDescr | Պարամետրի նկարագրությունը օտար լեզվով։ |
| paramPermanent | Պարամետրի քեշավորման մակարդակը։ Արժեքներն են՝ <br /> 0 - պարամետրը չի քեշավորվում։ <br /> 1 - համակարգ մուտք գործելիս պարամետրի արժեքը բեռնվում է և պահպանվում է ծրագրի հիշողության մեջ։ <br /> 2 - պարամետրի արժեքը քեշավորվում է ծրագրի հիշողության մեջ առաջին անգամ դիմելուց։ |
| paramGroup | Պարամետրի խումբը։ Արժեքները ընտրվում են `PARGROUP` ծառից։ |
| paramUpdateAccess |  Պարամետրի խմբագրման թույլտվություն։ Արժեքներն են՝ <br /> 0 - խմբագրում թույլ չի տրվում Համակարգի պարամետրերի ուղղորդիչից։ <br /> 1 - խմբագրում թույլ է տրվում միայն ադմինիստրատորին։ <br /> 2 - խմբագրում թույլ է տրվում բոլոր օգտագործողներն։ |
| paramMemo | Պարամետրի մանրամասն նկարագրություն։ |
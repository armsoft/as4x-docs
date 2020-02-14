---
layout: page
title: "Job նկարագրություն"
---

# Առաջադրանքի տարրի նկարագրություն 

Առաջադրանքի տարրը նկարագրում է «երկար» աշխատող ֆունկցիա և նրան փոխանցվող պարամետրերի բազմությունը։

Առաջադրանքի տարրերը հավաքվում են առաջադրաքի ձևանմուշների մեջ օգտագործողի կողմից, ապա աշխատացվում որոշված պարամետրերի արժեքնորով։

## Շարահյուսություն

``` as4x
Job {
    Name = sName;
    Caption = sCaption;
    ECaption = sECaption;
    Description = sDescription;
    Version = nVersion;
    Type = nType;
    SourceModule = sScriptModule;
    Start = sStartProcedure;
    ValidateParams = sValidateParams;
    InitArray = sInitArray;
    DoForArrayElement = sDoForArrayElement;
    ArrayElementDecs = sArrayElementDecs;
    SysID = sSysID;

    Param {Name = sParamName1; Caption = sParamCaption1; Type=sParamType1; };
    '...
    Param {Name = sParamNameN; Caption = sParamCaptionN; Type=sParamTypeN; };
};
```
Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| sName | Առաջադրանքի տարրի ներքին անուն։ |
| sCaption | Առաջադրանքի տարրի անվանումը։ |
| sECaption | Առաջադրանքի տարրի անվանումը օտար լեզվով: |
| sDescription | Առաջադրանքի տարրի մանրամասն նկարագրությունը։ |
| nVersion | (Հնացած) Սահմանում է առաջադրանքի տարրի նկարագրության տարբերակի համարը։ Որը ամրագրված է հետագա օգտագործման համար։ |
| nType | Առաջադրանքի տեսակը։ 1,2 կամ 3 արժեք ընդունող։ <br/> `1` արժեքի դեպքում կանչվում է `Function sStartProcedure(ByVal Params As Dictionary, ByRef bCancel As Boolean As AsRepViewer` ֆունկցիան։ `Cancel` պարամետրը ապահովում է բոլոր առաջադրանքների դադարեցումը։ <br/> `2` արժեքի դեպքում կանչվում է `sInitArray(Params,VarArray)` ֆունկցիան, իսկ հետո՝ `sDoForArrayElement(Params,VarArrayElement)`։ <br/> `3` արժեքի դեպքում կանչվում է `sSysID(...) ֆունկցիան`։ |
| sValidateParams | Փոխանցվող պարամետրերի ստուգումը կատարող ֆունկցիայի ներքին անունը։ |
| sScriptModule | [Մոդուլի](Module.html) ներքին անունը, որտեղ գտնվում են առաջադրանքի կողմից կանչվող ֆունկցիաները։ |
| sStartProcedure | `Type`=1-ի դեպքում, ֆունկցիայի ներքին անունը, որը կաշխատացվի առաջադրանքի մեկնարկի ժամանակ։ |
| sInitArray | `Type`=2-ի դեպքում, ֆունկցիայի ներքին անունը, որը հաշվարկում է մասիվը, որի ամեն մի տարր մշակվելու է `DoForArrayElement` պարամետրով որոշցվող ֆունկցիայով։ ֆունկցիան կաշխատացվի առաջադրանքի մեկնարկի ժամանակ։ |
| sDoForArrayElement | `Type`=2-ի դեպքում, ֆունկցիայի ներքին անունը, որով կմշակի `InitArray` ֆունկցիայով հաշվարկված մասիվի ամեն մի տարրը։ |
| sArrayElementDecs | `Type`=2-ի դեպքում, ֆունկցիայի ներքին անունը, որը մասիվի ամեն մի տարրի համար վերադարձնում է կոդը և անվանումը։ |
| sSysID | `Type`=3-ի դեպքում, համակարգային ֆունկցիայի ներքին անունը, որը կատարվում է առաջադրանքի մեկնարկի ժամանակ։ |
| sParamName | Պարամետրի ներքին անունը։ |
| sParamCaption | Պարամետրի անվանումը։ |
| sParamType | Պարամետրի [համակարգային տիպը](../types.md)։ |

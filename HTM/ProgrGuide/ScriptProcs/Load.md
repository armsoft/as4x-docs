---
layout: page
title: "Load իրադարձություն"
---

# Load տվյալների աղբյուրի համակարգային իրադարձություն

[Տես նաև](../Functions/Functions/CreateXArrayDB.html) [Օրինակ](#Օրինակ) [Կիրառվում է](../Functions/Asdata.md)

Load իրադարձությունը առաջանում է մասիվի հիման վրա աշխատող տվյալների աղբյուրի հաշվարկի ժամանակ։ 
Մշակիչի մեջ հարկավոր է հաշվարկել երկչափ մասիվը միջուկին վերադարձնելու համար։ 

Իրադարձությունը պետք է վերադարձնի XArrayDB տիպի օբյեկտը։

## Շարահյուսություն

``` vb
Public Function Load() As XArrayDB
    ' statements
End Function
```

## Օրինակ

XArrayDB տիպի օբյեկտը ստեղծելու համար անհրաժեշտ է կանչել [CreateXArrayDB](../Functions/Functions/CreateXArrayDB.html) ֆունկցիան։

``` vb
Public Function Load As XArrayDB
    Dim xArr As XArrayDB
    Set xArr = CreateXArrayDB(0,2)
  
    xArr.AppendRows
    xArr(0,0)="01"
    xArr(0,1)="Caption 01"
  
    xArr.AppendRows
    xArr(1,0)="02"
    xArr(1,1)="Caption 02"
  
    xArr.AppendRows
    xArr(2,0)="03"
    xArr(2,1)="Caption 03"
  
    Set Load = xArr
End Function
```
---
layout: page
title: "Օրինակ/OnEachRow"
---

Ստորև բերված է [տվյալների աղբյուրի](../Defs/Data.html) `OnEachRow` իրադարձության օրինակ։

Օրինակում `OnEachRow`-ի մշակիչի մեջ հաշվարկվում է `mKasSim` գլոբալ փոփոխականի արժեքը, որը `KASSIMV` սյան արժեքի հաշվարկի ժամանակ վերադարձվում է։

Տվյալների աղբյուրի նկարագրության մեջ սյունակի նկարագրությունը կլինի հետևյալը՝

``` as4x
COLUMN { NAME = KASSIMV; CAPTION="Դրամարկղի նիշ"; TYPE=C(3);
    SOURCE=1; FIELD=GetSymbol; DESCRIPTION="Cashbox Label"; }; 
```

Իսկ սկրիպտային մասում գրվում է՝

``` vb
Private mKasSim As String

Public Function GetSymbol() As String
    Return mKasSim
End Function

Public Sub OnEachRow()
Dim kasDoc As AsDoc
    Set kasDoc = LoadDoc(DS("fISN"))
    If kasDoc.ExistsRekv("KASSIMV") Then
        mKasSim = kasDoc("KASSIMV")
    Else
        mKasSim = ""
    End If
End Sub
```

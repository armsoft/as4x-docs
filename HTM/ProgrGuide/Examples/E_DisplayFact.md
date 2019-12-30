---
layout: page
title: "Օրինակ/DisplayFact"
---

Ստորև բերված է [հաշվառման նկարագրության](../Defs/Accounting.html) DisplayFact իրադարձության մշակիչի օրինակը։

``` vb
'Accounting {NAME = 02; CAPTION="Հետհաշվեկշիռային հաշվների մնացորդի հաշվառում";
'MainFolder = NBACC;
'Currency = 1;
'Remainder = 1;
'Limit=1;
'Description = "Հետհաշվեկշիռային հաշվների մնացորդի հաշվառում";
'FactHeader = "Ամսաթիվ  Հաշիվ       Գործողություն       Գումար      Դբ/Կր";
'Operation {Name = MSC; Caption = "Տարբեր";};
'Operation {Name = RVL; Caption = "Վերագնահատում";};
'SCRIPT {
    Function DisplayFact (ByVal Fact As AsFact) As String
    Dim tmpStr As String

        tmpStr = VTOFS("DATE", Fact.OpDate) & " " _
                & VTOFS("C(20)", Fact.Object) & " " _
                & IIF(Fact.DBCR="D", " Մուտք ", "   Ելք ") _
                & VTOFS("N(15,2)", Fact.Summa) & " " _
                & Fact.Op
                & "(" & Fact.Cur & ")" & VTOFS("N(15,2)", Fact.CurSumma)
        End If
        DisplayFact=tmpStr
    End Function
'};
'};
```



---
layout: page
title: "Օրինակ/DisplayRem"
---

Ստորև բերված է [հաշվառման նկարագրության](../Defs/Accounting.html) DisplayRem իրադարձության մշակիչի օրինակը։

``` vb
'ACCOUNTING { NAME = 01; CAPTION="Հաշվեկշիռային հաշվների մնացորդի հաշվառում";
'MainFolder = ACC;
'AccFolder = ACC;
'Currency = 1;
'Remainder = 1;
'Limit = 1;
'LinkedAccounting = 11;
'Description = "Հաշվեկշիռային հաշվների մնացորդի հաշվառում"
'RemHeader = "Վերջնական մնացորդ";
'Operation {Name = TRF; Caption = "Փոխանցում";}; 
'Operation {Name = MSC; Caption = "Տարբեր";};
'Operation {Name = RVL; Caption = "Վերագնահատում";};
'SCRIPT {
    Function DisplayRem(ByVal xISN As Long, ByVal xAccRem As Currency, ByVal xLinkedRem As Currency, ByVal xAccRemNC As Currency, ByVal xLinkedRemNC As Currency)
        DisplayRem = VTOFS("N(16,2)", xAccRem) _
                   & VTOFS("N(16,2)", xLinkedRem) _
                   & VTOFS("N(16,2)", xAccRemNC) _
                   & VTOFS("N(16,2)", xLinkedRemNC)
    End Function
'};
'};
```
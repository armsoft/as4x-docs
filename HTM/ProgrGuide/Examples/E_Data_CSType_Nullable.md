---
layout: page
title: "Օրինակ/Data CSType Nullable"
---

## AS-8X տեղափոխման յուրահատուկ ձևափոխություններ

Տվյալների աղբյուրի սյունակների և պարամետրերի դեպի AS-8X ավտոմատ տեղափոխման յուրահատուկ ձևափոխությունների օրինակներ։

``` as4x
'առանց հատուկ ձևափոխության
Column { Name = Count1; Caption = #Count; 
         Type = N(2,0); Source = 0; Field = fCURSUM; };

Column { Name = CloseDate1; Caption = #DateClosed; 
         Type = DATE; Source = 0; Field = fDATECLOSE; };

'ձևափոխություններ
' CSType 
Column { Name = Count2; Caption = #Count; 
         Type = N(2,0); Source = 0; Field = fCURSUM;
         CSType = decimal; };
' Nullable
Column { Name = CloseDate2; Caption = #DateClosed; 
         Type = DATE; Source = 0; Field = fDATECLOSE;
         Nullable = 1; };
```

Ձևավորված C# հատկությունները կլինեն

``` csharp
public int Count1 { get; set; }
public DateTime CloseDate1 { get; set; }

public decimal Count2 { get; set; }
public DateTime? CloseDate2 { get; set; }
```
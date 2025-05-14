---
layout: page
title: "BeforeCommitDelete իրադարձություն"
---

# BeforeCommitDelete օգտագործողի կողմից ընդլայնվող իրադարձություն

BeforeCommitDelete իրադարձությունը առաջանում է փաստաթուղթը [հեռացնելիս](../../Functions/Functions/DocumentsCirculation/DeleteDoc.md)` [Delete](../Delete.md) իրադարձությունից հետո։

## Շարահյուսություն

``` vb
Public Sub BeforeCommitDelete()  
    ' statements
End Sub
```

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով:

**Օրինակ**

``` vb
Public Sub MyBeforeCommitDeleteHandler() 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](../UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](../UserDefinedHandlers.md#մշակիչների-գրանցում):

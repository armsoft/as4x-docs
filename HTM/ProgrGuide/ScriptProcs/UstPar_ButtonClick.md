---
layout: page
title: "ButtonClick իրադարձություն"
---

# ButtonClick երկխոսության պատուհանի համակարգային իրադարձություն

[Տես նաև](../DialogEvents.md)  [Օրինակ](../Examples/E_Dialog_ButtonClick.md) [Կիրառվում է](../Functions/Dialog.md)

ButtonClick իրադարձությունը առաջանում է երկխոսության պատուհանի վրա [ավելացված](../Functions/AsDialog/AddButton.md) կոճակ սեղմելուց։

## Շարահյոսություն

``` vb
Public Sub ButtonClick(ByVal objDialog As AsDialog, _
                       ByVal BtnName As String, _
                       ByVal Top As String, _
                       ByVal Left As String, _
                       ByRef Reakcia As Long)
    ' statements
End Sub
```
Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| objDialog | Երկխոսության պատուհանի հղում։ |
| BtnName | Կոճակի ներքին անուն։ |
| Top | Էկրանի Y կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| Left | Էկրանի X կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| Reakcia | Կոճակի սեղմելուց հետո պահվածքը։ <br> `0` - պատուհանը մնում է բաց և ֆոկուսը կանգնում է կոճակի վրա։ <br/> `1` - պատուհանը փակվում է դադարեցնելու տարբերակով։ <br/> `2` - ոչ մի լրացուցիչ տրամաբանություն չի աշխատում։ Պատուհանը հնարավոր է փակել կամ ֆոկուսը փոխել մշակիչի աշխատանքի ընթացքում։ <br/> Լռությամբ արժեքը `0`։ |

---
layout: page
title: "Constants/Սխալների կոդերի հաստատուններ"
---

# Սխալների կոդերի հաստատուններ

Այս սխալի կոդերը փոխանցվում են Err.Raise ֆունկցիայի առաջին պարամետրին։

Այժմ նրանց փոխարեն օգտագործվում են [RaiseError](../Functions/Functions/InterfaceManagment/RaiseError.md) և [BreakError](../Functions/Functions/InterfaceManagment/BreakError.md) ֆունկցիաները։

| Հաստատուն | Արժեք | Նկարագրություն |
|--|--|--|
| gintUserErrors | vbObjectError + 2 | Այս կոդով սխալի առաջացման ժամանակ ծրագրի աշխատանքը դադարեցվում է, և օգտագործողին տրվում է համապատասխան հաղորդագրություն։ |
| gintUserBreakError | vbObjectError + 3 | Այս կոդով սխալի առաջացման ժամանակ ծրագրի աշխատանքը դարարեցվում է։ Հիմնականում օգտագործվում է [AsMsgBox](../Functions/Functions/InterfaceManagment/AsMsgBox.html)-ով հաղորդագրություն ցույց տալուց հետո, երբ օգտագործողը դադարեցնում է աշխատանքը։ |

## Տես նաև

[RaiseError](../Functions/Functions/InterfaceManagment/RaiseError.md)

[BreakError](../Functions/Functions/InterfaceManagment/BreakError.md)

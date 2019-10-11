---
layout: page
title: "Օրինակ/Accounting"
---

# Օրինակում ցույց է տրված AccFolder, Caption, CountOperation, Cur, Description, FactHeader, LastFactDate, Limit, MainFolder, Name, Remainder, RemHeader, RoundSumma, RoundCurSumma հատկությունների օգտագործումը


Օրինակի մեջ կանչվում է Accounting ֆունկցիան, mUch-ի միջոցով վերադարձնում է "01" հաշվետվության նկարագրության հղումը, նրա բոլոր հատկություններով և մեթոդներով։
В примере вызывается функция Accounting, через mUch возвращается ссылка на описание учета &quot;01&quot; со всеми его свойствами и методами.

``` vb
Set mUch = [Accounting](../Functions/Functions/SysDefManagment/Accounting.html)("01")
sAccFolder=mUch.AccFolder
sCaption=mUch.Caption
nCountOperation = mUch.CountOperation
bCur = mUch.Cur
sDescription=mUch.Description
sFactHeader=mUch.FactHeader
LastOpDate = mUch.LastFactDate(doc.ISN)
bLimit = mUch.Limit
sMainFolder=mUch.MainFolder
.....
sName=mUch.Name
bRemainder = mUch.Remainder
sRemHeader=mUch.RemHeader
nRoundSumma = mUch.RoundSumma
nRoundCurSumma = mUch.RoundCurSumma         
```
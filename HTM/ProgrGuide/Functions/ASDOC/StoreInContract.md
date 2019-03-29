---
layout: page
title: "AsDoc/StoreInContract"
---
# StoreInContract մեթոդ

[См. также](../Asdoc.md) Օրինակ [Применяется к](../Asdoc.md)

> ՀԾ-Բանկ

Գրանցում է պայմանագիրը CONTRACTS աղյուսակում։

## Շարահյուսություն


``` vb
object.StoreInContract(descContract)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։ |
| descContract | ***AsContractDesc*** օբյեկտի հղում։ |

## Նկատառումներ

Մեթոդը հասանելի է միայն բանկայնի բաժնի սկրիպտներից։ 

Սա StoreInFolder ֆունկցիայի համարժեքն է CONTRACTS աղյուսակում գրանցելու համար։ 
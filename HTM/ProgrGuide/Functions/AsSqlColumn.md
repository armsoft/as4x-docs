---
layout: page
title: "AsSqlColumn օբյեկտ"
---

# AsSqlColumn օբյեկտ 

Հանդիսանում է սյուն պահելու(ստանալու) միջոց:

| Հատկություններ | Նկարագրություն |
|--|--|
| [ChunkRequired](AsSqlColumn/ChunkRequired.md) | Վերադարձնում է true եթե սյան տիպը\` Varchar(Max), NVarchar(Max), VarBinary(Max), Text, NText կամ Image է և պետք է արդյունքը ստանալ GetChunk-ով, false\` հակառակ դեպքում: |
| [Name](AsSqlColumn/Name.md) | Վերադարձնում է սյան անունը:|
| [OrdinalPosition](AsSqlColumn/OrdinalPosition.md) | Վերադարձնում է սյան համարը հարցման մեջ:|
| [Size](AsSqlColumn/Size.md) | Վերադարձնում է սյան չափը:|
| [SqlType](AsSqlColumn/SqlType.md) | Վերադարձնում է սյան տիպի համապատասխան SQL տիպը:|
| [Value](AsSqlColumn/Value.md) | Վերադարձնում է սյան ընթացիկ տողի արժեքը:|



| Մեթոդներ | Նկարագրություն |
|--|--|
| [ColumnSize](AsSqlColumn/ColumnSize.md) | Վերադարձնում է սյան ընթացիկ տողի արժեքի չափը:|
| [GetChunk](AsSqlColumn/GetChunk.md) | Բեռնում է սյան պարունակությունը տրված չափով:|
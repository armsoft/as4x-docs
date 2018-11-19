---
layout: home
---

here is some text in Index upp.


# AS4X API Documentation

```js
function isItWorking() {
  let text = "some text";
  let other = text.toString();
  let val1 = 123;
  //comment here
}
```

```vb
Function IsItWorking()
    Dim fso As Object
    let val1 As Long
    Set fso = CreateObject("Scripting.FileSystemObject")
    val1 = 123
    'comment here
    REM comment here
End Function
```

```typescript
async function isItWorking(): void {
  let text: string = "some text";
  let other = text.toString();
  let val1: number = 123;
  //comment here
}
```

```ts
async function isItWorking(): void {
  let text: string = "some text";
  let other = text.toString();
  let val1: number = 123;
  //comment here
}
```

```html
<pre>
<code class="abc">lalala
lalala
</code>
</pre>
<!-- commment here -->
<div class="qwe">
  <span style='font-family:Arial'>some text</span>
</div>
```


``` as4x
Access {
    AccessID = nAccessID;
    Caption = sAccCaption;
    ECaption = sAccECaption;
};
```

``` as4x
Common {
    Description = sDescription;
    Language = nLanguage;
    Authentication = sAuthentication;
    UseWindowsDefaultPrinter = nUseWindowsDefaultPrinter;

    Config {
        Name = sConfigName1;
        Server = sServer1; 
        Database = sDatabase1;
        BaseFolder = sBaseFolder1;
        BackupFolder = sBackupFolder1;
        SS = sSourceConnected1;
        Context = sContext1;
        StorePrnSet = sStorePrinterSetting1;
        ReadOnly = sReadonly1;
    };
};
```


``` as4x
COMMON { 
	DESCRIPTION = "Initialization";
	LANGUAGE = 1;
	'MODE = 4.0;
	'HEARTBEAT="Retail:555"; 
	'AUTHENTICATION=WINDOWS;

	CONFIG{ NAME="d_bank1";		SERVER="bank-server";		DATABASE=d_bank1;		CONTEXT = ASBANK;      };
	CONFIG{ NAME="d_bank5";		SERVER="bank-server\sql2012";		DATABASE=d_bank5;		CONTEXT = ASBANK;      };


	CONFIG{ NAME="z_as_enterprise_e"; SERVER=ACC-SERVER;  DATABASE=z_as_enterprise_e;   CONTEXT = ASENTERPRISE;};
	
	BASEFOLDER{ PATH="C:\AS-4X\tests";	SS = NO; CONTEXT = ASBANK;};
	BASEFOLDER{ PATH="C:\LocalWS\Bank Scripts\asbank"; 					SS = YES; CONTEXT = ASBANK;};
	
	BASEFOLDER{ PATH="C:\AS-4X\Enterprise Script\Enterprise"; 			SS = YES; CONTEXT = ASENTERPRISE;};
};
SCRIPED {
   TFS ="http://tfserver:8080/tfs/Armsoft";
};
```
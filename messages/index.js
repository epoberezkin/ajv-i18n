'use strict';

/**
 * When adding new locales, please maintain alphabetic ordering.
 * "en" should remain in the first position.
 * Tests will be failing otherwise.
 */

module.exports = {
  // supported locales
  _locales: [
    'en',
    'ar',
    'cz',
    'de',
    'es',
    'fr',
    'hu',
    'it',
    'ja',
    'ko',
    'nb',
    'nl',
    'pl',
    'pt-BR',
    'ru',
    'sk',
    'sv',
    'th',
    'zh',
    'zh-TW',
    'fa'
  ],

  // shared defines
  _defs: {
    n: '{{var n = e.params.limit;}}',
    mPlural: {
      // plural for the words item (element) and character
      en: '{{? n!=1 }}s{{?}}',
      ar: '{{? n!=1 }}عناصر{{?}}',
      cz: '{{? n==1 }}ek{{??}}ků{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      es: '{{? n!=1 }}s{{?}}', //only item (element)
      fr: '{{? n!=1 }}s{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      nb: '{{? n!=1 }}er{{?}}',
      nl: '{{? n!=1 }}s{{?}}',
      pl: '{{? n==1 }}u{{??}}ów{{?}}',
      'pt-BR': '{{? n!=1 }}s{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}',
      sk: '{{? n==1 }}ok{{??}}kov{{?}}',
      sv: '{{? n!=1 }}er{{?}}',
      fa: '{{? n!=1 }}ها{{?}}'
    },
    propPlural: {
      // plural for the word property (attribute)
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      ar: '{{? n!=1 }}خصائص{{?}}',
      cz: '{{? n>=2 && n<=4 }}ky{{?? n!=1 }}ek{{??}}ka{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      es: '{{? n!=1 }}es{{?}}',
      fr: '{{? n!=1 }}s{{?}}',
      hu: '{{? n!=1 }}i{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      nb: '{{? n==1 }}en{{??}}er{{?}}',
      nl: '{{? n!=1 }}pen{{?}}',
      pl: '{{? n==1 }}e{{??}}a{{?}}',
      'pt-BR': '{{? n!=1 }}s{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}',
      sk: '{{? n>=2 && n<=4 }}ky{{?? n!=1 }}iek{{??}}ka{{?}}',
      sv: '{{? n!=1 }}er{{?}}',
      fa: '{{? n!=1 }}ها{{?}}'
    }
  },

  // error messages
  'false schema': {
    en: 'boolean schema is false',
    ar: 'المخطط المنطقي غير صحيح',
    cz: 'schéma je false',
    de: 'boolesches Schema ist falsch',
    fr: 'le schema est "false"',
    it: 'lo schema booleano è falso',
    ko: 'boolean 스키마는 올바르지 않습니다',
    nb: 'boolsk schema er usannt',
    nl: 'boolean schema is fout',
    ru: 'схема равна false',
    sk: 'schéma je false',
    sv: 'boolean schema är falskt',
    th: 'schema เป็น false',
    zh: '布尔模式出错',
    'zh-TW': '布林模式不正確',
    fa: 'الگو اشتباه است'
  },
  $ref: {
    en: "can\\'t resolve reference {{=e.params.ref}}",
    ar: 'لا يمكن العثور على المرجع {{=e.params.ref}}',
    cz: 'reference {{=e.params.ref}} nenalezena',
    de: 'kann die Referenz {{=e.params.ref}} nicht auflösen',
    es: 'no se puede resolver la referencia {{=e.params.ref}}',
    fr: "impossible d\\'accéder à la référénce {{=e.params.ref}}",
    hu: 'nem sikerült feloldani a hivatkozást {{=e.params.ref}}',
    it: 'non è possibile risolvere il riferimento {{=e.params.ref}}',
    ja: '{{=e.params.ref}}のスキーマを見つけることができない',
    ko: '{{=e.params.ref}} 참조를 찾을 수 없습니다',
    nb: 'kan ikke finne referansen {{=e.params.ref}}',
    nl: 'referentie {{=e.params.ref}} niet gevonden',
    pl: 'nie można znaleść schematu {{=e.params.ref}}',
    'pt-BR': 'Não é possível resolver a referência {{=e.params.ref}}',
    ru: 'не найдена схема {{=e.params.ref}}',
    sk: 'referenciu {{=e.params.ref}} sa nepodarilo nájsť',
    sv: 'kan inte lösa referens {{=e.params.ref}}',
    th: 'ไม่สามารถหา reference {{=e.params.ref}}',
    zh: '无法找到引用{{=e.params.ref}}',
    'zh-TW': '無法找到引用{{=e.params.ref}}',
    fa: 'نمی توان به مرجع {{=e.params.ref}} اشاره کرد'
  },
  additionalItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} عنصر',
    cz: '{{#def.n}}nemůže mít víc, než {{=n}} prv{{#def.mPlural}}',
    de:
      '{{#def.n}}darf nicht mehr als {{=n}} Element{{#def.mPlural}} enthalten',
    es: '{{#def.n}}no debe tener más de {{=n}} elemento{{#def.mPlural}}',
    fr: '{{#def.n}}ne doit pas contenir plus de {{=n}} élémént{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}以上あってはいけない',
    ko: '{{#def.n}} 항목은 아이템을 {{=n}}개 이상 가질 수 없습니다',
    nb: '{{#def.n}}kan ikke ha mer enn {{=n}} element{{#def.mPlural}}',
    nl: '{{#def.n}}mag niet meer dan {{=n}} item{{#def.mPlural}} hebben',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': 'Não são permitidos itens adicionais',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nemôže obsahovať viac, než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde ha fler än {{=n}} sak{{#def.mPlural}}',
    th: '{{#def.n}}ควรมีสมาชิกไม่เกิน {{=n}}',
    zh: '{{#def.n}}不允许超过{{=n}}个元素',
    'zh-TW': '{{#def.n}}不可以超過{{=n}}個元素',
    fa: '{{#def.n}} نباید بیشتر از {{=n}} ایتم باشد {{#def.mPlural}}'
    // en: 'Additional items not allowed',
    // nb: 'Tillegselementer er ikke tillatt',
    // 'pt-PT': 'Não são permitidos itens adicionais',
  },
  additionalProperties: {
    en: 'should not have additional properties',
    ar: 'يجب أن لا يحوي خصائص إضافية',
    cz: 'nemůže mít další položky',
    de: 'darf keine zusätzlichen Attribute haben',
    es: 'no debe tener propiedades adicionales',
    fr: 'ne doit pas contenir de propriétés additionnelles',
    hu: 'nem lehetnek további elemei',
    it: 'non deve avere attributi aggiuntivi',
    ja: '追加してはいけない',
    ko: '추가적인 속성은 허용되지 않습니다',
    nb: 'kan ikke ha flere egenskaper',
    nl: 'mag geen extra eigenschappen hebben',
    pl: 'nie powinien zawierać dodatkowych pól',
    'pt-BR': 'Não são permitidas propriedades adicionais',
    ru: 'не должно иметь дополнительные поля',
    sk: 'nemôže obsahovať ďalšie položky',
    sv: 'borde inte ha fler egenskaper',
    th: 'ไม่ควรมี property เกินที่กำหนดไว้',
    zh: '不允许有额外的属性',
    'zh-TW': '不可以有額外的屬性',
    fa: 'فیلد مازاد مجاز نمی‌باشد'
    // en: 'Additional properties not allowed',
    // nb: 'Tilleggsvariabler er ikke tillatt',
    // 'pt-PT': 'Não são permitidas propriedades adicionais',
  },
  anyOf: {
    en: 'should match some schema in "anyOf"',
    ar: 'يجب أن يوافق أحد المخططات الموجودة في "anyOf"',
    cz: 'musí vyhovět alespoň jednomu schématu v "anyOf"',
    de: 'muss einem der Schemata in "anyOf" entsprechen',
    es: 'debe coincidir con algún esquema en "anyOf"',
    fr: 'doit correspondre à un schéma de "anyOf"',
    hu: 'meg kell feleljen legalább egy "anyOf" alaknak',
    it: 'deve corrispondere ad uno schema in "anyOf"',
    ja: '"anyOf"のスキーマとマッチしなくてはいけない',
    ko: '"anyOf"의 스키마와 일치해야 합니다',
    nb: 'må samsvare med et schema i "anyOf"',
    nl: 'moet overeenkomen met een schema in "anyOf"',
    pl: 'powinien pasować do wzoru z sekcji "anyOf"',
    'pt-BR': 'Os dados não correspondem a nenhum esquema de "anyOf"',
    ru: 'должно соответствовать одной их схем в "anyOf"',
    sk: 'musí splňovať aspoň jednu zo schém v "anyOf"',
    sv: 'borde matcha något schema i "anyOf"',
    th: 'ควรมี schema บางอย่างตรงกับที่กำหนดไว้ใน "anyOf"',
    zh: '数据应为 anyOf 所指定的其中一个',
    'zh-TW': '不符合 anyOf 指定的模式',
    fa: 'الزام به همخوانی داشتن فیلد ها در "anyOf" است.'
    // en: 'Data does not match any schemas from "anyOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "anyOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "anyOf"',
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.depsCount;}}'
    },
    en:
      '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    ar:
      '{{#def.n}} يجب أن يحوي الخصائص {{=e.params.deps}} عندما تكون الخاصية {{=e.params.property}} موجودة',
    cz:
      '{{#def.n}} musí mít polož{{#def.propPlural}}: {{=e.params.deps}}, pokud obsahuje {{=e.params.property}}',
    de:
      '{{#def.n}}muss Attribut{{#def.propPlural}} {{=e.params.deps}} aufweisen, wenn Attribut {{=e.params.property}} gesetzt ist',
    es:
      '{{#def.n}}debe contener la{{#def.mPlural}} propiedad{{#def.propPlural}} {{=e.params.deps}} cuando la propiedad {{=e.params.property}} se encuentra presente',
    fr:
      '{{#def.n}}doit avoir la propriété {{=e.params.deps}} quand la propriété {{=e.params.property}} est présente',
    hu:
      '{{#def.n}}-nak kell legyen{{? n>1 }}ek{{?}} a következő tulajdonsága{{#def.propPlural}}: {{=e.params.deps}}, ha van {{=e.params.property}} tulajdonsága',
    it:
      "{{#def.n}}dovrebbe avere {{? n==1 }}l'{{??}}gli {{?}}attribut{{#def.propPlural}} {{=e.params.deps}} quando l'attributo {{=e.params.property}} è presente",
    ja:
      '{{=e.params.property}}がある場合、{{#def.n}}は{{=e.params.deps}}をつけなければいけない',
    ko:
      '{{#def.n}}{{=e.params.property}}속성이 있는 경우, {{=e.params.deps}} 속성이 있어야합니다',
    nb:
      '{{#def.n}}må ha egenskapen{{? n != 1}}e{{?}} {{=e.params.deps}} når egenskapen {{=e.params.property}} er angitt',
    nl:
      '{{#def.n}}moet eigenschap{{#def.propPlural}} {{=e.params.deps}} hebben als eigenschap {{=e.params.property}} aanwezig is',
    pl:
      '{{#def.n}}powinien zawierać pol{{#def.propPlural}} {{=e.params.deps}} kiedy pole {{=e.params.property}} jest obecne',
    'pt-BR':
      '{{#def.n}} deve ter propriedade{{#def.propPlural}} {{=e.params.deps}} quando a propriedade {{=e.params.property}} estiver presente',
    ru:
      '{{#def.n}}должно иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
    sk:
      '{{#def.n}} musí obsahovať polož{{#def.propPlural}}: {{=e.params.deps}}, ak obsahuje {{=e.params.property}}',
    sv:
      '{{#def.n}}borde ha egenskap{{#def.propPlural}} {{=e.params.deps}} när egenskap {{=e.params.property}} finns tillgängligt',
    th:
      '{{#def.n}}เมื่อมี property {{=e.params.property}} แล้วก็ควรมี property {{=e.params.deps}} ด้วย',
    zh:
      '{{#def.n}}应当拥有属性{{=e.params.property}}的依赖属性{{=e.params.deps}}',
    'zh-TW':
      '{{#def.n}}應該要有屬性{{=e.params.property}}的依賴屬性{{=e.params.deps}}',
    fa:
      '{{#def.n}} باید حاوی مقدار {{=e.params.deps}} وقتی ویژگی {{=e.params.property}} وجود دارد'

    // en: 'Dependency failed - key must exist: {missing} (due to key: {key})',
    // nb: 'Variabelen {missing} må være definert (på grunn av følgende variabel: {key})',
    // 'pt-PT': 'Uma dependência falhou - tem de existir uma chave: {missing} (devido à chave: {key})',
  },
  enum: {
    en: 'should be equal to one of predefined values',
    ar: 'قيمة هذا الحقل يجب أن تكون مساوية لأحد القيم المعرفة مسبقاً',
    cz: 'musí být rovna jedné hodnotě z výčtu',
    de: 'muss einem der vorgegebenen Werte entsprechen',
    es: 'deber ser igual a uno de los valores predefinidos',
    fr: 'doit être égal à une des valeurs prédéfinies',
    hu: 'egyenlő kell legyen valamely előre meghatározott értékkel',
    it: 'dovrebbe essere uguale ad uno dei valori predefiniti',
    ja: '事前に定義された値のいずれかに等しくなければいけない',
    ko: '미리 정의된 값중 하나여야 합니다',
    nb: 'må være lik en av de forhåndsdefinerte verdiene',
    nl: 'moet gelijk zijn aan één van de voorgedefinieerde waardes',
    pl: 'powinien być równy jednej z predefiniowanych wartości',
    'pt-BR': 'Deve ser igual a um dos valores predefinidos',
    ru: 'должно быть равен одному из значений в "enum"',
    sk: 'musí byť jedna z definovaných hodnôt',
    sv: 'borde vara ekvivalent med en av dess fördefinierade värden',
    th: 'ควรตรงกับค่าที่กำหนดไว้',
    zh: '应当是预设定的枚举值之一',
    'zh-TW': '應該要在預設的值之中',
    fa: 'مقدار باید با یکی از مقادیر تعریف شده همخوانی داشته باشد'
    // en: 'No enum match for: {value}',
    // nb: 'Ingen samsvarende enum verdi for: {value}',
    // 'pt-PT': 'Nenhuma correspondência \'enum\' para: {value}',
  },
  format: {
    en: 'should match format "{{=e.params.format}}"',
    ar: 'يجب أن يوافق الصيغة "{{=e.params.format}}"',
    cz: 'musí být ve formátu "{{=e.params.format}}"',
    de: 'muss diesem Format entsprechen: "{{=e.params.format}}"',
    es: 'debe coincidir con el formato "{{=e.params.format}}"',
    fr: 'doit correspondre au format "{{=e.params.format}}"',
    hu: 'meg kell feleljen a következő formátumnak: "{{=e.params.format}}"',
    it: 'deve corrispondere al formato "{{=e.params.format}}"',
    ja: '"{{=e.params.format}}"形式に揃えなければいけない',
    ko: '"{{=e.params.format}}" 포맷과 일치해야 합니다',
    nb: 'må stemme overens med formatet "{{=e.params.format}}"',
    nl: 'moet overeenkomen met dit formaat: "{{=e.params.format}}"',
    pl: 'powinien zgadzać się z formatem "{{=e.params.format}}"',
    'pt-BR': 'A validação do formato falhou "{{=e.params.format}}"',
    ru: 'должно соответствовать формату "{{=e.params.format}}"',
    sk: 'musí obsahovať formát "{{=e.params.format}}"',
    sv: 'borde matcha formatet "{{=e.params.format}}"',
    th: 'ควรมีรูปแบบเป็น "{{=e.params.format}}"',
    zh: '应当匹配格式 "{{=e.params.format}}"',
    'zh-TW': '應該要符合{{=e.params.format}}格式',
    fa: 'باید با فرمت "{{=e.params.format}}" مطابقت داشته باشد'
    // en: 'Format validation failed ({message})',
    // nb: 'Formatteringen stemmer ikke ({message})',
    // 'pt-PT': 'A validação do formato falhou ({message})',
  },
  maximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}muss {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}deve essere {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    ko: '{{#def.c}} {{=cond}} 이여야 합니다',
    nb: '{{#def.c}}må være {{=cond}}',
    nl: '{{#def.c}}moet {{=cond}} zijn',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    th: '{{#def.c}}ควร {{=cond}}',
    zh: '{{#def.c}}应当为 {{=cond}}',
    'zh-TW': '{{#def.c}}應該要 {{=cond}}',
    fa: '{{#def.c}} باید {{=cond}} باشد'
    // en: 'Value {value} is greater than maximum {maximum}',
    // nb: 'Verdien {value} er større enn maksimalverdi {maximum}',
    // 'pt-PT': 'O valor {value} é maior que o máximo {maximum}',
  },
  minimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}muss {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}deve essere {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    ko: '{{#def.c}} {{=cond}} 이여야 합니다',
    nb: '{{#def.c}}må være {{=cond}}',
    nl: '{{#def.c}}moet {{=cond}} zijn',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    th: '{{#def.c}}ควร {{=cond}}',
    zh: '{{#def.c}}应当为 {{=cond}}',
    'zh-TW': '{{#def.c}}應該要 {{=cond}}',
    fa: '{{#def.c}} باید {{=cond}} باشد'
    // en: 'Value {value} is less than minimum {minimum}',
    // nb: 'Verdien {value} er mindre enn minsteverdi {minimum}',
    // 'pt-PT': 'O valor {value} é menor que o mínimo {minimum}',
  },
  maxItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} عنصر',
    cz: '{{#def.n}}nesmí obsahovat víc než {{=n}} prv{{#def.mPlural}}',
    de: '{{#def.n}}darf nicht mehr als {{=n}} Element{{#def.mPlural}} haben',
    es: '{{#def.n}}no debe contener más de {{=n}} elemento{{#def.mPlural}}',
    fr: '{{#def.n}}ne doit pas contenir plus de {{=n}} élément{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non deve avere più di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上であってはいけない',
    ko: '{{#def.n}}아이템이 최대 {{=n}}개이여야 합니다',
    nb: '{{#def.n}}kan ikke ha fler enn {{=n}} element{{#def.mPlural}}',
    nl: '{{#def.n}}mag niet meer dan {{=n}} item{{#def.mPlural}} hebben',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': '{{#def.n}}não deve ter mais que {{=n}} elemento{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie obsahovať viac než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} sak{{#def.mPlural}}',
    th: '{{#def.n}}ควรมีสมาชิกไม่เกิน {{=n}}',
    zh: '{{#def.n}}不应多于 {{=n}} 个项',
    'zh-TW': '{{#def.n}}不應該多於 {{=n}} 個',
    fa: '{{#def.n}} نباید بیشتر از {{=n}} ایتم باشد{{#def.mPlural}}'
    // en: 'Array is too long ({length}), maximum {maximum}',
    // nb: 'Listen er for lang ({length} elementer), maksimalt {maximum}',
    // 'pt-PT': 'A \'array\' é muito longa ({length}), máximo {maximum}',
  },
  minItems: {
    en: '{{#def.n}}should not have less than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} عنصر',
    cz: '{{#def.n}}nesmí obsahovat méně než {{=n}} prv{{#def.mPlural}}',
    de: '{{#def.n}}darf nicht weniger als {{=n}} Element{{#def.mPlural}} haben',
    es: '{{#def.n}}no debe contener menos de {{=n}} elemento{{#def.mPlural}}',
    fr:
      '{{#def.n}}ne doit pas contenir moins de {{=n}} élément{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} eleme',
    it: '{{#def.n}}non deve avere meno di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下であってはいけない',
    ko: '{{#def.n}}아이템이 최소 {{=n}}개이여야 합니다',
    nb: '{{#def.n}}kan ikke ha færre enn {{=n}} element{{#def.mPlural}}',
    nl: '{{#def.n}}mag niet minder dan {{=n}} item{{#def.mPlural}} hebben',
    pl: '{{#def.n}}nie powinien mieć mniej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': '{{#def.n}}não deve ter menos que {{=n}} elemento{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie obsahovať menej než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} sak{{#def.mPlural}}',
    th: '{{#def.n}}ควรมีสมาชิกไม่น้อยกว่า {{=n}}',
    zh: '{{#def.n}}不应少于 {{=n}} 个项',
    'zh-TW': '{{#def.n}}不應該少於 {{=n}} 個',
    fa: '{{#def.n}} نباید کمتر از {{=n}} ایتم باشد{{#def.mPlural}}'
    // en: 'Array is too short ({length}), minimum {minimum}',
    // nb: 'Listen er for kort ({length} elementer), minst {minimum}',
    // 'pt-PT': 'A \'array\' é muito curta ({length}), mínimo {minimum}',
  },
  maxLength: {
    en: '{{#def.n}}should not be longer than {{=n}} character{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} محرف',
    cz: '{{#def.n}}nesmí být delší než {{=n}} znak{{? n!=1 }}ů{{?}}',
    de: '{{#def.n}}darf nicht länger als {{=n}} Zeichen sein',
    es: '{{#def.n}}no debe contener más de {{=n}} caracter{{? n!=1 }}es{{?}}',
    fr: '{{#def.n}}ne doit pas dépasser {{=n}} caractère{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet hosszabb, mint {{=n}} szimbólum',
    it:
      '{{#def.n}}non deve essere più lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    ja: '{{#def.n}}は{{=n}}文字以上であってはいけない',
    ko: '{{#def.n}}최대 {{=n}}글자여야 합니다',
    nb: '{{#def.n}}kan ikke være lengre enn {{=n}} tegn',
    nl: '{{#def.n}}mag niet langer dan {{=n}} karakter{{#def.mPlural}} zijn',
    pl: '{{#def.n}}nie powinien być dłuższy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    'pt-BR':
      '{{#def.n}}não deve ter mais que {{=n}} caracter{{? n!=1 }}es{{?}}',
    ru: '{{#def.n}}должно быть не длиннее, чем {{=n}} символ{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie byť dlhší než {{=n}} znak{{? n!=1 }}ov{{?}}',
    sv: '{{#def.n}}borde inte vara längre än {{=n}} tecken',
    th: '{{#def.n}}ไม่ควรมากกว่า {{=n}} ตัวอักษร',
    zh: '{{#def.n}}不应多于 {{=n}} 个字符',
    'zh-TW': '{{#def.n}}不應該多於 {{=n}} 個字元',
    fa: '{{#def.n}}نباید بیشتر از  {{=n}} کارکتر باشد{{#def.mPlural}}'
    // en: 'String is too long ({length} chars), maximum {maximum}',
    // nb: 'Strengen er for lang ({length} tegn), maksimalt {maximum}',
    // 'pt-PT': 'A \'string\' é muito longa ({length} caracteres), máximo {maximum}',
  },
  minLength: {
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} محرف',
    cz: '{{#def.n}}nesmí být kratší než {{=n}} znak{{? n!=1 }}ů{{?}}',
    de: '{{#def.n}}darf nicht kürzer als {{=n}} Zeichen sein',
    es: '{{#def.n}}no debe contener menos de {{=n}} caracter{{? n!=1 }}es{{?}}',
    fr: '{{#def.n}}ne doit pas faire moins de {{=n}} caractère{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet rövidebb, mint {{=n}} szimbólum',
    it:
      '{{#def.n}}non deve essere meno lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    ja: '{{#def.n}}は{{=n}}文字以下であってはいけない',
    ko: '{{#def.n}}최소 {{=n}}글자여야 합니다',
    nb: '{{#def.n}}kan ikke være kortere enn {{=n}} tegn',
    nl: '{{#def.n}}mag niet korter dan {{=n}} karakter{{#def.mPlural}} zijn',
    pl: '{{#def.n}}nie powinien być krótszy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    'pt-BR':
      '{{#def.n}}não deve ter menos que {{=n}} caracter{{? n!=1 }}es{{?}}',
    ru: '{{#def.n}}должно быть не короче, чем {{=n}} символ{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie byť kratší než {{=n}} znak{{? n!=1 }}ov{{?}}',
    sv: '{{#def.n}}borde inte vara kortare än {{=n}} tecken',
    th: '{{#def.n}}ไม่ควรน้อยกว่า {{=n}} ตัวอักษร',
    zh: '{{#def.n}}不应少于 {{=n}} 个字符',
    'zh-TW': '{{#def.n}}不應該少於 {{=n}} 個字元',
    fa: '{{#def.n}}نباید کمتر از {{=n}} کارکتر باشد{{#def.mPlural}}'
    // en: 'String is too short ({length} chars), minimum {minimum}',
    // nb: 'Strengen er for kort ({length} tegn), minst {minimum}',
    // 'pt-PT': 'A \'string\' é muito curta ({length} caracteres), mínimo {minimum}',
  },
  maxProperties: {
    en: '{{#def.n}}should not have more than {{=n}} propert{{#def.propPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} خصائص',
    cz: '{{#def.n}}nesmí mít víc než {{=n}} polož{{#def.propPlural}}',
    de:
      '{{#def.n}}darf nicht mehr als {{=n}} Attribut{{#def.propPlural}} haben',
    es: '{{#def.n}}no debe contener más de {{=n}} propiedad{{#def.propPlural}}',
    fr:
      '{{#def.n}}ne doit pas contenir plus de {{=n}} propriété{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non deve avere più di {{=n}} attribut{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上のプロパティを有してはいけない',
    ko: '{{#def.n}}속성은 최대 {{=n}}개 이내여야 합니다',
    nb: '{{#def.n}}kan ikke ha mer enn {{=n}} egenskap{{#def.mPlural}}',
    nl:
      '{{#def.n}}mag niet meer dan {{=n}} eigenschap{{#def.propPlural}} hebben',
    pl:
      '{{#def.n}}nie powinien zawierać więcej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    'pt-BR':
      '{{#def.n}}não deve ter mais que {{=n}} propriedade{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} пол{{#def.propPlural}}',
    sk: '{{#def.n}}nesmie obsahovať viac než {{=n}} polož{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} egenskap{{#def.propPlural}}',
    th: '{{#def.n}}ไม่ควรมี property เกิน {{=n}}',
    zh: '{{#def.n}}不应有多于 {{=n}} 个属性',
    'zh-TW': '{{#def.n}}不應該多於 {{=n}} 個屬性',
    fa: '{{#def.n}}نباید بیشتر از  {{=n}} ایتم باشد{{#def.mPlural}}'
    // en: 'Too many properties defined ({propertyCount}), maximum {maximum}',
    // nb: 'For mange variabler definert ({propertyCount}), makismalt {maximum} er tillatt',
    // 'pt-PT': 'Muitas propriedades definidas ({propertyCount}), máximo {maximum}',
  },
  minProperties: {
    en: '{{#def.n}}should not have less than {{=n}} propert{{#def.propPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} خصائص',
    cz: '{{#def.n}}nesmí mít méně než {{=n}} polož{{#def.propPlural}}',
    de:
      '{{#def.n}}darf nicht weniger als {{=n}} Attribut{{#def.propPlural}} haben',
    es:
      '{{#def.n}}no debe contener menos de {{=n}} propiedad{{#def.propPlural}}',
    fr:
      '{{#def.n}}ne doit pas contenir moins de {{=n}} propriété{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non deve avere meno di {{=n}} attribut{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下のプロパティを有してはいけない',
    ko: '{{#def.n}}속성은 최소 {{=n}}개 이상이여야 합니다',
    nb: '{{#def.n}}kan ikke ha mindre enn {{=n}} egenskap{{#def.mPlural}}',
    nl:
      '{{#def.n}}mag niet minder dan {{=n}} eigenschap{{#def.propPlural}} hebben',
    pl:
      '{{#def.n}}nie powinien zawierać mniej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    'pt-BR':
      '{{#def.n}}não deve ter menos que {{=n}} propriedade{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} пол{{#def.propPlural}}',
    sk: '{{#def.n}}nesmie obsahovať menej než {{=n}} polož{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} egenskap{{#def.propPlural}}',
    th: '{{#def.n}}ไม่ควรมี property น้อยกว่า {{=n}}',
    zh: '{{#def.n}}不应有少于 {{=n}} 个属性',
    'zh-TW': '{{#def.n}}不應該少於 {{=n}} 個屬性',
    fa: '{{#def.n}}نباید کمتر از  {{=n}} ایتم باشد{{#def.mPlural}}'
    // en: 'Too few properties defined ({propertyCount}), minimum {minimum}',
    // nb: 'For få variabler definert ({propertyCount}), minst {minimum} er forventet',
    // 'pt-PT': 'Poucas propriedades definidas ({propertyCount}), mínimo {minimum}',
  },
  multipleOf: {
    en: 'should be a multiple of {{=e.params.multipleOf}}',
    ar: ' يجب أن يحوي أكثر من {{=e.params.multipleOf}}',
    cz: 'musí být násobkem {{=e.params.multipleOf}}',
    de: 'muss ein Vielfaches von {{=e.params.multipleOf}} sein',
    es: 'debe ser múltiplo de {{=e.params.multipleOf}}',
    fr: 'doit être un multiple de {{=e.params.multipleOf}}',
    hu:
      'a többszöröse kell legyen a következő számnak: {{=e.params.multipleOf}}',
    it: 'deve essere un multiplo di {{=e.params.multipleOf}}',
    ja: '{{=e.params.multipleOf}}の倍数でなければいけない',
    ko: '{{=e.params.multipleOf}}의 배수여야 합니다',
    nb: 'må være et multiplum av {{=e.params.multipleOf}}',
    nl: 'moet een veelvoud van {{=e.params.multipleOf}} zijn',
    pl: 'powinien być wielokrotnością {{=e.params.multipleOf}}',
    'pt-BR': 'deve ser múltiplo de {{=e.params.multipleOf}}',
    ru: 'должно быть кратным {{=e.params.multipleOf}}',
    sk: 'musí byť násobkom {{=e.params.multipleOf}}',
    sv: 'borde vara en multipel av {{=e.params.multipleOf}}',
    th: 'ควรเป็นเลขที่หาร {{=e.params.multipleOf}} ลงตัว',
    zh: '应当是 {{=e.params.multipleOf}} 的整数倍',
    'zh-TW': '應該是 {{=e.params.multipleOf}} 的整數倍',
    fa: 'باید مضربی از {{=e.params.multipleOf}} باشد'
    // en: 'Value {value} is not a multiple of {multipleOf}',
    // nb: 'Verdien {value} er ikke et multiplum av {multipleOf}',
    // 'pt-PT': 'O valor {value} não é um múltiplo de {multipleOf}',
  },
  not: {
    en: 'should not be valid according to schema in "not"',
    ar: 'يجب أن يكون غير صحيح وفقاً للمخطط "not"',
    cz: 'nesmí vyhovět schématu v "not"',
    de: 'muss dem in "not" angegebenen Schema widersprechen',
    es: 'no debe ser válido según el esquema en "not"',
    fr: 'est invalide selon le schéma "not"',
    hu: 'nem lehet érvényes a "not" alaknak megfelelően',
    it: 'non deve essere valido in base allo schema di "non"',
    ja: '"not"のスキーマに従って有効としてはいけない',
    ko: '"not"스키마에 따라 유효하지 않아야 합니다',
    nb: 'kan ikke samsvare med schema i "not"',
    nl: 'mag niet overeenkomen met een schema in "not"',
    pl: 'nie powinien pasować do wzoru z sekcji "not"',
    'pt-BR': 'não deve ser valido segundo o esquema em "not"',
    ru: 'должно не соответствовать схеме в "not"',
    sk: 'nesmie splňovať schému v "not"',
    sv: 'borde inte vara giltigt enligt schema i "not"',
    th: 'ไม่ควรถูกต้องตาม schema ที่กำหนดไว้ใน "not"',
    zh: '不应当匹配 "not" schema',
    'zh-TW': '不應該符合 "not" schema',
    fa: 'نباید معتبر باشد بر اساس "not"'
    // en: 'Data matches schema from "not"',
    // nb: 'Data samsvarer med skjema fra "not"',
    // 'pt-PT': 'Os dados correspondem a um esquema de "not"',
  },
  oneOf: {
    en: 'should match exactly one schema in "oneOf"',
    ar: 'يجب أن يوافق مخطط واحد فقط موجود في "oneOf"',
    cz: 'musí vyhovět právě jednomu schématu v "oneOf"',
    de: 'muss genau einem der Schemata in "oneOf" entsprechen',
    es: 'debe coincidir con un solo esquema en "oneOf"',
    fr: 'doit correspondre à exactement un schéma de "oneOf"',
    hu: 'meg kell feleljen pontosan egy "anyOf" alaknak',
    it: 'deve corrispondere esattamente ad uno schema in "oneOf"',
    ja: '"oneOf"のスキーマと完全に一致しなくてはいけない',
    ko: '"oneOf" 스키마중 하나와 정확하게 일치해야 합니다',
    nb: 'må samsvare med nøyaktig ett schema i "oneOf"',
    nl: 'mag maar met één schema in "oneOf" overeenkomen',
    pl: 'powinien pasować do jednego wzoru z sekcji "oneOf"',
    'pt-BR': 'deve corresponder exatamente com um esquema em "oneOf"',
    ru: 'должно соответствовать в точности одной схемe в "oneOf"',
    sk: 'musí splňovať práve jednu schému v "oneOf"',
    sv: 'borde matcha exakt ett schema i "oneOf"',
    th: 'ควรตรงกับเพียง schema เดียวใน "oneOf" เท่านั้น',
    zh: '只能匹配一个 "oneOf" 中的 schema',
    'zh-TW': '只能符合一個 "oneOf" 中的 schema',
    fa: 'باید حداقل با یکی از طرح های "oneOf" مطابقت داشته'
    // en: 'Data does not match any schemas from "oneOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "oneOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "oneOf"',
  },
  pattern: {
    en: 'should match pattern "{{=e.params.pattern}}"',
    ar: 'يجب أن يوافق النمط "{{=e.params.pattern}}"',
    cz: 'musí vyhovět regulárnímu výrazu "{{=e.params.pattern}}"',
    de: 'muss diesem Muster entsprechen: "{{=e.params.pattern}}"',
    es: 'debe coincidir con el patron "{{=e.params.pattern}}"',
    fr: 'doit correspondre au format "{{=e.params.pattern}}"',
    hu: 'meg kell feleljen a következő mintának: "{{=e.params.pattern}}"',
    it: 'deve corrispondere al formato "{{=e.params.pattern}}"',
    ja: '"{{=e.params.pattern}}"のパターンと一致しなければいけない',
    ko: '"{{=e.params.pattern}}"패턴과 일치해야 합니다',
    nb: 'må samsvare med mønsteret "{{=e.params.pattern}}"',
    nl: 'moet aan dit patroon voldoen "{{=e.params.pattern}}"',
    pl: 'powinien zgadzać się ze wzorem "{{=e.params.pattern}}"',
    'pt-BR': 'deve corresponder ao padrão "{{=e.params.pattern}}"',
    ru: 'должно соответствовать образцу "{{=e.params.pattern}}"',
    sk: 'musí splňovať regulárny výraz "{{=e.params.pattern}}"',
    sv: 'borde matcha mönstret "{{=e.params.pattern}}"',
    th: 'ควรตรงกับแพทเทิร์น "{{=e.params.pattern}}"',
    zh: '应当匹配模式 "{{=e.params.pattern}}"',
    'zh-TW': '應該符合模式 "{{=e.params.pattern}}"',
    fa: 'باید با الگوی "{{=e.params.pattern}}" مطابقت داشته باشد'
    // en: 'String does not match pattern: {pattern}',
    // nb: 'Strengen samsvarer ikke med regulært uttrykk: {pattern}',
    // 'pt-PT': 'A \'string\' não corresponde ao modelo: {pattern}',
  },
  required: {
    en: 'should have required property {{=e.params.missingProperty}}',
    ar: 'هذا الحقل إلزامي',
    cz: 'musí obsahovat požadovanou položku {{=e.params.missingProperty}}',
    de:
      'muss das erforderliche Attribut {{=e.params.missingProperty}} enthalten',
    es: 'debe tener la propiedad requerida {{=e.params.missingProperty}}',
    fr: 'requiert la propriété {{=e.params.missingProperty}}',
    hu: 'kell legyen {{=e.params.missingProperty}} tulajdonsága',
    it: "deve avere l'attributo obbligatorio {{=e.params.missingProperty}}",
    ja: '必要なプロパティ{{=e.params.missingProperty}}がなければいけない',
    ko: '{{=e.params.missingProperty}} 속성은 필수입니다',
    nb: 'må ha den påkrevde egenskapen {{=e.params.missingProperty}}',
    nl: 'moet de verplichte eigenschap {{=e.params.missingProperty}} hebben',
    pl: 'powinien zawierać wymagane pole {{=e.params.missingProperty}}',
    'pt-BR': 'deve ter a propriedade requerida {{=e.params.missingProperty}}',
    ru: 'должно иметь обязательное поле {{=e.params.missingProperty}}',
    sk: 'musí obsahovať požadovanú položku {{=e.params.missingProperty}}',
    sv: 'borde ha den nödvändiga egenskapen {{=e.params.missingProperty}}',
    th: 'ควรมี property {{=e.params.missingProperty}} ที่บังคับไว้',
    zh: '应当有必需属性 {{=e.params.missingProperty}}',
    'zh-TW': '應該有必須屬性 {{=e.params.missingProperty}}',
    fa: 'فیلد {{=e.params.missingProperty}} الزامی می‌باشد.'
    // en: 'Missing required property: {key}',
    // nb: 'Mangler obligatorisk variabel: {key}',
    // 'pt-PT': 'Propriedade necessária em falta: {key}',
  },
  type: {
    _defs: {
      t: '{{var t = e.params.type;}}'
    },
    en: 'should be {{=e.params.type}}',
    ar: 'قيمة هذا الحقل غير صالحة',
    cz: 'musí být {{=e.params.type}}',
    de: 'muss sein: {{=e.params.type}}',
    es: 'debe ser {{=e.params.type}}',
    fr: 'doit être de type {{=e.params.type}}',
    hu: '{{=e.params.type}} kell legyen',
    it: 'deve essere di tipo {{=e.params.type}}',
    ja: '{{=e.params.type}}でなければいけない',
    ko: '{{=e.params.type}}이여야 합니다',
    nb:
      '{{#def.t}}må være {{? t == "number" }}et tall{{?? t == "integer"}}et heltall{{?? t == "string"}}en streng{{?? t == "boolean"}}ja eller nei{{??}}{{=t}}{{?}}',
    nl:
      '{{#def.t}}moet een {{? t == "number" }}nummer{{?? t == "integer"}}geheel getal{{?? t == "string"}}tekenreeks{{?? t == "boolean"}}ja of nee waarde{{?}} ({{=t}}) zijn',
    pl: 'powinien być {{=e.params.type}}',
    'pt-BR': 'deve ser {{=e.params.type}}',
    ru: 'должно быть {{=e.params.type}}',
    sk: 'musí byť {{=e.params.type}}',
    sv: 'borde vara {{=e.params.type}}',
    th: 'ควรเป็น {{=e.params.type}}',
    zh: '应当是 {{=e.params.type}} 类型',
    'zh-TW': '應該是 {{=e.params.type}} 類型',
    fa: 'باید از نوع {{=e.params.type}} باشد'
    // en: 'Invalid type: {type} (expected {expected})',
    // nb: 'Ugyldig type: {type} (forventet {expected})',
    // 'pt-PT': 'Tipo inválido: {type} (esperava {expected})',
  },
  uniqueItems: {
    en:
      'should not have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    ar:
      'يجب أن لا يحوي عناصر مكررة (العنصر ## {{=e.params.j}} و {{=e.params.i}} متطابقة)',
    cz:
      'nesmí obsahovat duplicitní prvky (prvky ## {{=e.params.j}} a {{=e.params.i}} jsou stejné)',
    de:
      'darf keine Duplikate enthalten (Elemente #{{=e.params.j}} und #{{=e.params.i}} sind gleich)',
    es:
      'no debe contener elementos duplicados, (los elementos ## {{=e.params.j}} y {{=e.params.i}} son idénticos)',
    fr:
      'ne doit pas contenir de doublons (les éléments ## {{=e.params.j}} et {{=e.params.i}} sont identiques)',
    hu:
      'nem lehetnek azonos elemei ({{=e.params.j}} és {{=e.params.i}} elemek azonosak)',
    it:
      'non deve avere duplicati (gli elementi ## {{=e.params.j}} e {{=e.params.i}} sono uguali)',
    ja:
      '重複するアイテムがあってはいけない（{{=e.params.j}}と{{=e.params.i}}は同じである）',
    ko:
      '중복 아이템이 없어야 합니다 (아이템{{=e.params.j}}과 아이템{{=e.params.i}}가 동일합니다)',
    nb:
      'kan ikke ha duplikate elemeneter (elementene ## {{=e.params.j}} og {{=e.params.i}} er identiske)',
    nl:
      'mag geen dubbele items bevatten (items ## {{=e.params.j}} en {{=e.params.i}} zijn gelijk)',
    pl:
      'nie powinien zawierać elementów które się powtarzają (elementy {{=e.params.j}} i {{=e.params.i}} są identyczne)',
    'pt-BR':
      'não deve ter itens duplicados (os itens ## {{=e.params.j}} e {{=e.params.i}} são idênticos)',
    ru:
      'не должно иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
    sk:
      'nesmie obsahovať duplicitné prvky (prvky ## {{=e.params.j}} a {{=e.params.i}} sú rovnaké)',
    sv:
      'borde inte ha duplicerade saker (sakerna ## {{=e.params.j}} och {{=e.params.i}} är identiska)',
    th:
      'ไม่ควรมีสมาชิกซ้ำักัน (ลำดับที่ {{=e.params.j}} และ {{=e.params.i}} ซ้ำ)',
    zh:
      '不应当含有重复项 (第 {{=e.params.j}} 项与第 {{=e.params.i}} 项是重复的)',
    'zh-TW':
      '不應該有重複項目 (第 {{=e.params.j}} 項和第 {{=e.params.i}} 項是重複的)',
    fa:
      'نباید ایتم تکراری داشته باشد (items ## {{=e.params.j}} و {{=e.params.i}} برابر هستند)'
    // en: 'Array items are not unique (indices {match1} and {match2})',
    // nb: 'Elementene er ikke unike (indeks {match1} og {match2} er like)',
    // 'pt-PT': 'Os itens da \'array\' não são únicos (índices {match1} e {match2})',
  },
  custom: {
    en: 'should pass "{{=e.keyword}}" keyword validation',
    ar: 'يجب أن تمرر كلمة التحقق المفتاحية "{{=e.keyword}}"',
    cz: 'musí vyhovět "{{=e.keyword}}" validaci',
    de: 'muss die Validierung "{{=e.keyword}}" bestehen',
    es: 'debe pasar la validación de palabra clave "{{=e.keyword}}"',
    fr: 'doit être valide selon le critère "{{=e.keyword}}"',
    it: 'deve essere valido secondo il criterio "{{=e.keyword}}"',
    ko: '"{{=e.keyword}}"키워드 검사를 통과해야 합니다',
    nb: 'må samsvare med valideringen for {{=e.keyword}}',
    nl: 'moet sleutelwoord validatie "{{=e.keyword}}" doorstaan',
    pl: 'powinien przejść walidację "{{=e.keyword}}"',
    'pt-BR': 'deve passar a validação de palavras-chave "{{=e.keyword}}"',
    ru: 'должно соответствовать правилу "{{=e.keyword}}"',
    sk: 'musí splniť "{{=e.keyword}}" validáciu',
    sv: 'bör passera "{{=e.keyword}}" nyckelord validering',
    th: 'ควรผ่านคีย์เวิร์ด "{{=e.keyword}}"',
    zh: '应当通过 "{{=e.keyword}} 关键词校验"',
    'zh-TW': '應該通過 "{{=e.keyword}} 關鍵詞檢驗"',
    fa: 'باید با"{{=e.keyword}}" مطابقت داشته باشد'
  },
  propertyNames: {
    en: "property name '{{=e.params.propertyName}}' is invalid",
    ar: "اسم الخاصية '{{=e.params.propertyName}}' غير صالح",
    cz: "název položky '{{=e.params.propertyName}}' neodpovídá schématu",
    de: "Attributname '{{=e.params.propertyName}}' ist ungültig",
    fr: "le nom de propriété '{{=e.params.propertyName}}' est invalide",
    it: "il nome dell'attritbuto '{{=e.params.propertyName}}' non è valido",
    ko: "'{{=e.params.propertyName}}' 속성명이 올바르지 않습니다",
    nb: "egenskapen med navnet '{{e.params.propertyName}}' er ugyldig",
    nl: "eigenschapnaam '{{=e.params.propertyName}}' is ongeldig",
    ru: "имя поля '{{=e.params.propertyName}}' не соответствует схеме",
    sk: "názov položky '{{=e.params.propertyName}}' nezodpovedá schéme",
    sv: "egenskap med namnet '{{=e.params.propertyName}}' är inte giltig",
    th: "property '{{=e.params.propertyName}}' ไม่ถูกต้อง",
    zh: "属性名 '{{=e.params.propertyName}}' 无效",
    'zh-TW': "属性名 '{{=e.params.propertyName}}' 無效",
    fa: "ویژگی '{{=e.params.propertyName}}' مجاز نمی باشد"
  },
  patternRequired: {
    en: 'should have property matching pattern "{{=e.params.missingPattern}}"',
    ar: 'يجب أن يحوي خاصية توافق النمط "{{=e.params.missingPattern}}"',
    cz:
      'musí obsahovat položku vyhovující regulárnímu výrazu "{{=e.params.missingPattern}}"',
    de:
      'muss ein Attribut nach folgendem Muster haben "{{=e.params.missingPattern}}"',
    es:
      'la propiedad debe coincidir con el patrón "{{=e.params.missingPattern}}"',
    fr:
      'la propriété doit correspondre au format "{{=e.params.missingPattern}}"',
    it:
      'deve avere un attributo che corrisponda al formato "{{=e.params.missingPattern}}"',
    ko: '"{{=e.params.missingPattern}}"패턴과 일치하는 속성을 가져야 합니다',
    nb:
      'må ha en egenskap som samsvarer med mønsteret "{{=e.params.missingPattern}}',
    nl:
      'moet een eigenschap hebben met het volgende patroon "{{=e.params.missingPattern}}"',
    pl: 'powinien mieć pole pasujące do wzorca "{{=e.params.missingPattern}}"',
    'pt-BR':
      'deve ter a propriedade de padrão de correspondência "{{=e.params.missingPattern}}"',
    ru:
      'должно иметь поле, соответствующее образцу "{{=e.params.missingPattern}}"',
    sk:
      'musí obsahovať položku splňjúcu regulárny výraz "{{=e.params.missingPattern}}"',
    sv:
      'bör ha en egenskap som matchar mönstret "{{=e.params.missingPattern}}"',
    th: 'ควรมี property ที่มีชื่อตรงกับ pattern "{{=e.params.missingPattern}}"',
    zh: '应当有属性匹配模式 {{=e.params.missingPattern}}',
    'zh-TW': '應該有屬性對應模式 {{=e.params.missingPattern}}',
    fa:
      'باید ویژگی سازگار با الگوی "{{=e.params.missingPattern}}" وجود داشته باشد'
  },
  switch: {
    en:
      'should pass "switch" keyword validation, case {{=e.params.caseIndex}} fails',
    ar:
      'يجب أن تمرر كلمة التحقق المفتاحية "switch"، الحالة {{=e.params.caseIndex}}  خاطئة',
    cz:
      'musí projít validácí "switch", případ {{=e.params.caseIndex}} je neúspěšný',
    de:
      'muss der "switch"-Validierung entsprechen, der Fall {{=e.params.caseIndex}} schlägt fehl',
    es:
      'debe pasar la validación "switch" de palabra clave, el caso {{=e.params.caseIndex}} falló',
    fr:
      'doit être valide selon le critère "switch":validation par mot-clé, le cas {{=e.params.caseIndex}} est invalide',
    it:
      'deve passare la validazione del criterio "switch", il caso {{=e.params.caseIndex}} fallisce',
    ko: '"switch"키워드 검증에 실패하였습니다. {{=e.params.caseIndex}} 실패',
    nb:
      'må passere "switch" validering, tilfellet {{=e.params.caseIndex}} misslykkes',
    nl:
      'moet "switch" sleutelwoord validatie doorstaan, geval {{=e.params.caseIndex}} gaat verkeerd',
    pl:
      'powinien przejść walidacje pola "switch", przypadek {{=e.params.caseIndex}} zawiódł',
    'pt-BR':
      'deve passar a validação "switch" de palavra-chave, o caso {{=e.params.caseIndex}} falha',
    ru: 'должно соответствовать правилу {{=e.params.caseIndex}} в "switch"',
    sk:
      'musí prejsť validáciou "switch", prípad {{=e.params.caseIndex}} je neúspešný',
    sv:
      'bör passera "switch" nyckelord validering, fallet {{=e.params.caseIndex}} misslyckas',
    th: 'ควรผ่านคีย์เวิร์ด "switch", ผิดเคสที่ {{=e.params.caseIndex}}',
    zh: '由于 {{=e.params.caseIndex}} 失败，未通过 "switch" 校验, ',
    'zh-TW': '因為 {{=e.params.caseIndex}} 失败，沒有通過 "switch" 檢驗, ',
    fa:
      'باید با عبارت "switch" مطابقت داشته باشد, مورد {{=e.params.caseIndex}} عدم موفقیت'
  },
  const: {
    en: 'should be equal to constant',
    ar: 'يجب أن يكون ثابتاً',
    cz: 'musí být konstantní',
    de: 'muss gleich der Konstanten sein',
    es: 'debe ser igual a la constante',
    fr: 'doit être égal à la constante',
    it: 'deve essere uguale alla costante',
    ko: '상수와 같아야합니다',
    nb: 'må være lik konstanten',
    nl: 'moet gelijk zijn aan constante',
    pl: 'powinien być równy stałej',
    ru: 'должно быть равно заданному значению',
    sk: 'musí byť konštanta',
    sv: 'bör vara en konstant',
    th: 'ควรมีค่าเหมือนกับค่าคงที่',
    zh: '应当等于常量',
    'zh-TW': '應該等於常數',
    fa: 'باید برابر با ثابت باشد'
  },
  contains: {
    en: 'should contain a valid item',
    ar: 'يجب أن يحوي عنصرا صحيح',
    cz: 'musí obsahovat prvek odpovídající schématu',
    de: 'muss ein valides Element enthalten',
    fr: 'doit contenir un élément valide',
    it: 'deve contentere un elemento valido',
    ko: '올바른 아이템을 포함해야 합니다',
    nb: 'må inneholde et gyldig element',
    nl: 'moet een geldig item bevatten',
    'pt-BR': 'deve conter um item válido',
    ru: 'должно содержать значение соответствующее схеме',
    sk: 'musí obsahovať prvok zodpovedajúci schéme',
    sv: 'bör innehålla ett giltigt objekt',
    th: 'ควรมีสมาชิกที่ถูกต้องอยู่',
    zh: '应当包含一个有效项',
    'zh-TW': '應該包含一個有效元素',
    fa: 'باید حاوی ایتم معتبر باشد'
  },
  formatMaximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}muss {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    it: '{{#def.c}}deve essere {{=cond}}',
    ko: '{{#def.c}} {{=cond}} 이여야 합니다',
    nb: '{{#def.c}}må være {{=cond}}',
    nl: '{{#def.c}}moet {{=cond}} zijn',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    th: '{{#def.c}}ควร {{=cond}}',
    zh: '{{#def.c}}应当是 {{=cond}}',
    'zh-TW': '{{#def.c}}應該是 {{=cond}}',
    fa: '{{#def.c}}باید مطابق {{=cond}} باشد'
  },
  formatMinimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}muss {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    it: '{{#def.c}}deve essere {{=cond}}',
    ko: '{{#def.c}} {{=cond}} 이여야 합니다',
    nb: '{{#def.c}}må være {{=cond}}',
    nl: '{{#def.c}}moet {{=cond}} zijn',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    th: '{{#def.c}}ควร {{=cond}}',
    zh: '{{#def.c}}应当是 {{=cond}}',
    'zh-TW': '{{#def.c}}應該是 {{=cond}}',
    fa: '{{#def.c}}باید مطابق {{=cond}} باشد'
  },
  formatExclusiveMaximum: {
    en: 'formatExclusiveMaximum should be boolean',
    ar: 'formatExclusiveMaximum يجب أن يكون منطقياً',
    cz: 'formatExclusiveMaximum musí být boolean',
    de: 'formatExclusiveMaximum muss ein boolescher Wert sein',
    es: 'formatExclusiveMaximum debe ser booleano',
    fr: 'formatExclusiveMaximum doit être un booléen',
    it: 'formatExclusiveMaximum deve essere booleano',
    ko: 'formatExclusiveMaximum 은 boolean 값이여야 합니다',
    nb: 'formatExclusiveMaximum må være en boolsk verdi',
    nl: 'formatExclusiveMaximum moet een boolean zijn',
    pl: 'formatExclusiveMaximum powinien być boolean',
    'pt-BR': 'formatExclusiveMaximum deve ser um booleano',
    ru: 'formatExclusiveMaximum должно быть boolean',
    sk: 'formatExclusiveMaximum musí byť boolean',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    th: 'formatExclusiveMaximum ควรเป็น boolean',
    zh: 'formatExclusiveMaximum 应当是布尔值',
    'zh-TW': 'formatExclusiveMaximum 應該是布林值',
    fa: 'formatExclusiveMaximum باید مقدار بولی باشد'
  },
  formatExclusiveMinimum: {
    en: 'formatExclusiveMinimum should be boolean',
    ar: 'formatExclusiveMinimum يجب أن يكون منطقياً',
    cz: 'formatExclusiveMinimum musí být boolean',
    de: 'formatExclusiveMinimum muss ein boolescher Wert sein',
    es: 'formatExclusiveMinimum debe ser booleano',
    fr: 'formatExclusiveMinimum doit être un booléen',
    it: 'formatExclusiveMinimum deve essere booleano',
    ko: 'formatExclusiveMinimum 은 boolean 값이여야 합니다',
    nb: 'formatExclusiveMinimum må være en boolsk verdi',
    nl: 'formatExclusiveMinimum moet een boolean zijn',
    pl: 'formatExclusiveMinimum powinień być boolean',
    'pt-BR': 'formatExclusiveMinimum deve ser um booleano',
    ru: 'formatExclusiveMinimum должно быть boolean',
    sk: 'formatExclusiveMinimum musí byť boolean',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    th: 'formatExclusiveMinimum ควรเป็น boolean',
    zh: 'formatExclusiveMinimum 应当是布尔值',
    'zh-TW': 'formatExclusiveMinimum 應該是布林值',
    fa: 'formatExclusiveMinimum باید مقدار بولی باشد'
  },
  if: {
    en: 'should match "{{=e.params.failingKeyword}}" schema',
    ar: 'يجب أن توافق المخطط "{{=e.params.failingKeyword}}"',
    de: 'muss dem Schema "{{=e.params.failingKeyword}}" entsprechen',
    it: 'deve corrispondere allo schema "{{=e.params.failingKeyword}}"',
    ko: '"{{=e.params.failingKeyword}}" 스키마와 일치해야 합니다',
    nl: 'moet overeenkomen met "{{=e.params.failingKeyword}}" schema',
    ru: 'должно соответствовать схемe "{{=e.params.failingKeyword}}"',
    th: 'ควรตรงกับ schema "{{=e.params.failingKeyword}}"',
    zh: '应当匹配模式 "{{=e.params.failingKeyword}}" ',
    'zh-TW': '應該符合 "{{=e.params.failingKeyword}}" schema',
    fa: 'باید مطابق الگوی "{{=e.params.failingKeyword}}" باشد'
  }
};

module.exports.exclusiveMaximum = module.exports.maximum;
module.exports.exclusiveMinimum = module.exports.minimum;

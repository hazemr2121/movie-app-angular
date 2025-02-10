import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(languageCode: string | null | undefined): string {
    if (!languageCode) {
      return 'Unknown';
    }

    const languageMap: { [key: string]: string } = {
      en: 'English',
      ar: 'Arabic',
      fr: 'French',
      zh: 'Chinese',
      es: 'Spanish',
      de: 'German',
      hi: 'Hindi',
      ja: 'Japanese',
      ru: 'Russian',
      pt: 'Portuguese',
      it: 'Italian',
      ko: 'Korean',
      tr: 'Turkish',
      nl: 'Dutch',
      pl: 'Polish',
      sv: 'Swedish',
      fi: 'Finnish',
      no: 'Norwegian',
      da: 'Danish',
      el: 'Greek',
      he: 'Hebrew',
      th: 'Thai',
      vi: 'Vietnamese',
      id: 'Indonesian',
      ms: 'Malay',
      fil: 'Filipino',
      ur: 'Urdu',
      bn: 'Bengali',
      ta: 'Tamil',
      te: 'Telugu',
      sw: 'Swahili',
      uk: 'Ukrainian',
      cs: 'Czech',
      hu: 'Hungarian',
      ro: 'Romanian',
      sk: 'Slovak',
      sl: 'Slovenian',
      hr: 'Croatian',
      sr: 'Serbian',
      bg: 'Bulgarian',
      lt: 'Lithuanian',
      lv: 'Latvian',
      et: 'Estonian',
      is: 'Icelandic',
      ga: 'Irish',
      mt: 'Maltese',
      sq: 'Albanian',
      mk: 'Macedonian',
      bs: 'Bosnian',
      cy: 'Welsh',
      ca: 'Catalan',
      eu: 'Basque',
      gl: 'Galician',
      af: 'Afrikaans',
      zu: 'Zulu',
      xh: 'Xhosa',
      st: 'Southern Sotho',
      tn: 'Tswana',
      ss: 'Swati',
      ve: 'Venda',
      ts: 'Tsonga',
      nr: 'South Ndebele',
      kl: 'Greenlandic',
      iu: 'Inuktitut',
      am: 'Amharic',
      ti: 'Tigrinya',
      om: 'Oromo',
      so: 'Somali',
      ha: 'Hausa',
      yo: 'Yoruba',
      ig: 'Igbo',
      mg: 'Malagasy',
      ny: 'Chichewa',
      sn: 'Shona',
      co: 'Corsican',
      fy: 'Frisian',
      gd: 'Scottish Gaelic',
      kw: 'Cornish',
      br: 'Breton',
      mi: 'Maori',
      sm: 'Samoan',
      to: 'Tongan',
      fj: 'Fijian',
      haw: 'Hawaiian',
      ceb: 'Cebuano',
      hmn: 'Hmong',
      lo: 'Lao',
      km: 'Khmer',
      my: 'Burmese',
      ka: 'Georgian',
      hy: 'Armenian',
      az: 'Azerbaijani',
      uz: 'Uzbek',
      kk: 'Kazakh',
      ky: 'Kyrgyz',
      tg: 'Tajik',
      tk: 'Turkmen',
      mn: 'Mongolian',
      bo: 'Tibetan',
      ne: 'Nepali',
      si: 'Sinhala',
      pa: 'Punjabi',
      gu: 'Gujarati',
      or: 'Odia',
      as: 'Assamese',
      ml: 'Malayalam',
      kn: 'Kannada',
      mr: 'Marathi',
      sa: 'Sanskrit',
      sd: 'Sindhi',
      ps: 'Pashto',
      ku: 'Kurdish',
      yi: 'Yiddish',
      lb: 'Luxembourgish',
      gv: 'Manx',
      cn:'China'
    };

    return languageMap[languageCode] || languageCode;
  }
}

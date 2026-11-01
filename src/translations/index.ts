export type Language = 'hi' | 'en';

export interface TranslationDictionary {
  appName: string;
  appTagline: string;
  navHome: string;
  navHowItWorks: string;
  navAbout: string;
  navPredictBtn: string;
  languageToggle: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroSecondaryCta: string;
  heroNoAccount: string;

  // Quick facts
  fact1Title: string;
  fact1Desc: string;
  fact2Title: string;
  fact2Desc: string;
  fact3Title: string;
  fact3Desc: string;
  fact4Title: string;
  fact4Desc: string;

  // How it works timeline
  timelineSectionTitle: string;
  timelineSectionSubtitle: string;
  timelineStep1Title: string;
  timelineStep1Desc: string;
  timelineStep2Title: string;
  timelineStep2Desc: string;
  timelineStep3Title: string;
  timelineStep3Desc: string;
  timelineStep4Title: string;
  timelineStep4Desc: string;

  // Features grid (2x3)
  featuresSectionTitle: string;
  featuresSectionSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature4Title: string;
  feature4Desc: string;
  feature6Title: string;
  feature6Desc: string;

  // Sample result showcase
  showcaseSectionTitle: string;
  showcaseSectionSubtitle: string;
  showcaseSampleBadge: string;
  showcasePoint1: string;
  showcasePoint2: string;
  showcasePoint3: string;
  showcaseTabLabel: string;

  // Crops we cover
  cropsSectionTitle: string;
  cropsSectionSubtitle: string;

  // FAQ
  faqSectionTitle: string;
  faqSectionSubtitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;

  // Final CTA & Editorial
  editorialQuote: string;
  editorialQuoteSub: string;

  // Footer
  footerDesc: string;
  footerDisclaimer: string;

  // Form general
  stepLabel: string;
  ofStep: string;
  nextBtn: string;
  backBtn: string;
  submitBtn: string;
  
  // Form Step 1: Location
  step1Title: string;
  step1Subtitle: string;
  stateLabel: string;
  statePlaceholder: string;
  districtLabel: string;
  districtPlaceholder: string;
  districtDisabledHelp: string;

  // Form Step 2: Crop & Season
  step2Title: string;
  step2Subtitle: string;
  seasonLabel: string;
  seasonAutoSelectedHelp: string;

  // Form Step 3: Land Area
  step3Title: string;
  step3Subtitle: string;
  areaLabel: string;
  areaPlaceholder: string;

  // Form Step 4: Soil & Fertilizer

  // Validation
  errSelectState: string;
  errSelectDistrict: string;
  errSelectCrop: string;
  errAreaPositive: string;

  // Loading
  loadingTitle: string;
  loadingStep1: string;
  loadingStep2: string;
  loadingStep3: string;

  // Result Page
  resultSummaryPrefix: string;
  quintal: string;
  comparisonTitle: string;
  reasonsTitle: string;
  reasonsSubtitle: string;
  adviceTitle: string;
  adviceSubtitle: string;
  kvkContactNote: string;
  confidenceTitle: string;
  confidenceLow: string;
  confidenceMedium: string;
  confidenceHigh: string;
  confidenceReasonUnknown: string;
  confidenceReasonReported: string;
  confidenceReasonCard: string;
  resultDisclaimer: string;

  // How it works page
  hiwTitle: string;
  hiwSubtitle: string;
  limitationsTitle: string;
  limitationsSubtitle: string;
  limitation1: string;
  limitation2: string;
  limitation3: string;
  limitation4: string;

  // About page
  aboutTitle: string;
  aboutSubtitle: string;
  aboutMissionTitle: string;
  aboutMissionDesc: string;
  aboutSimplicityTitle: string;
  aboutSimplicityDesc: string;
  aboutKvkTitle: string;
  aboutKvkDesc: string;
  aboutTollFree: string;

  // Data Year Notice & Typical Error Badge
  dataYearNotice: string;
  dataYearLabel: string;
  confidenceTypicalError: string;

  // Model Accuracy (About Page)
  aboutAccuracyTitle: string;
  aboutAccuracySubtitle: string;
  aboutAccuracyMedian: string;
  aboutAccuracyWithin25: string;
  aboutAccuracyWithin50: string;
  aboutAccuracyLimitation: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  hi: {
    appName: 'फसल साथी',
    appTagline: 'किसान भाइयों का पैदावार साथी',
    navHome: 'मुख्य पृष्ठ',
    navHowItWorks: 'कैसे काम करता है',
    navAbout: 'हमारे बारे में',
    navPredictBtn: 'फसल का अनुमान',
    languageToggle: 'English',

    heroTitle: 'अपनी फसल की पैदावार, पहले से जानिए',
    heroSubtitle: 'ज़िले के पिछले सरकारी आंकड़ों और फसल विवरण (राज्य, ज़िला, फसल, सीज़न व क्षेत्रफल) के आधार पर पैदावार का अनुमान लगाएं और बेहतर खेती के फैसले लें।',
    heroCta: 'अपनी फसल का अनुमान लगाएँ',
    heroSecondaryCta: 'यह कैसे काम करता है?',
    heroNoAccount: 'कोई खाता बनाने की ज़रूरत नहीं',

    fact1Title: '3 आसान स्टेप',
    fact1Desc: 'स्थान, फसल और खेत का नाप',
    fact2Title: 'हिंदी और English',
    fact2Desc: 'अपनी सुविधानुसार कभी भी भाषा बदलें',
    fact3Title: 'सरकारी आंकड़े अपने आप',
    fact3Desc: 'ज़िले के पिछले सरकारी रिकॉर्ड से जुड़ा हुआ',
    fact4Title: 'नतीजा क्विंटल में',
    fact4Desc: 'किसानों के परिचित देसी पैमाने में साफ हिसाब',

    timelineSectionTitle: 'यह कैसे काम करता है?',
    timelineSectionSubtitle: 'सरल वैज्ञानिक प्रक्रिया, जो किसी भी तकनीकी उलझन के बिना परिणाम देती है',
    timelineStep1Title: 'जगह और फसल बताइए',
    timelineStep1Desc: 'अपना राज्य, ज़िला और इस मौसम की बोई जाने वाली फसल चुनें।',
    timelineStep2Title: 'ज़िले के पिछले आंकड़े देखेंगे',
    timelineStep2Desc: 'आपके ज़िले के पिछले सरकारी पैदावार रिकॉर्ड और औसत आंकड़ों का मिलान होता है।',
    timelineStep3Title: 'वैज्ञानिक मॉडल गणना',
    timelineStep3Desc: 'एल्गोरिदम राज्य, ज़िला, फसल, सीज़न और क्षेत्रफल के आधार पर संभावित पैदावार निकालता है।',
    timelineStep4Title: 'अनुमान और सलाह पाइए',
    timelineStep4Desc: 'क्विंटल में साफ पैदावार, ज़िले से तुलना और जरूरी कृषि सुझाव।',

    featuresSectionTitle: 'फसल साथी की मुख्य विशेषताएँ',
    featuresSectionSubtitle: 'किसान भाइयों की ज़रूरतों को ध्यान में रखकर तैयार किया गया आसान साधन',
    feature1Title: 'सिर्फ़ ज़रूरी जानकारी पूछते हैं',
    feature1Desc: 'कोई लंबा फॉर्म या व्यक्तिगत सवाल नहीं, सिर्फ खेत से जुड़ी 3 बुनियादी बातें (स्थान, फसल, क्षेत्रफल)।',
    feature2Title: 'ज़िले के आंकड़े अपने आप जुड़ते हैं',
    feature2Desc: 'ज़िले के पिछले सरकारी पैदावार रिकॉर्ड अपने आप जुड़ जाते हैं, आपको दर्ज नहीं करने पड़ते।',
    feature4Title: 'नतीजा आपके पैमाने (क्विंटल/एकड़) में',
    feature4Desc: 'जटिल टन-प्रति-हेक्टेयर के फेर में पड़े बिना सीधा क्विंटल और प्रति एकड़ में हिसाब।',
    feature6Title: 'कारण और सलाह सरल भाषा में',
    feature6Desc: 'अनुमान के पीछे के 3 मुख्य कारण और नज़दीकी KVK से सलाह लेने के व्यावहारिक सुझाव।',

    showcaseSectionTitle: 'अनुमान का एक नमूना देखें',
    showcaseSectionSubtitle: 'जब आप 3-स्टेप फॉर्म पूरा करेंगे, तो आपको कुछ ऐसा स्पष्ट और उपयोगी परिणाम मिलेगा:',
    showcaseSampleBadge: 'नमूना परिणाम',
    showcasePoint1: 'कुल पैदावार और प्रति एकड़ पैदावार का सीधा आकलन',
    showcasePoint2: 'ज़िले के ऐतिहासिक औसत से प्रतिशत की तुलना',
    showcasePoint3: 'ऐतिहासिक रिकॉर्ड और ज़िला औसत के आधार पर प्रमुख कारकों की सूची',
    showcaseTabLabel: 'विभिन्न रेटिंग अवस्थाएँ परखें:',

    cropsSectionTitle: 'जिन फसलों का अनुमान उपलब्ध है',
    cropsSectionSubtitle: 'प्रमुख रबी, खरीफ और जायद की फसलें जिनका ज़िला-स्तरीय डेटा उपलब्ध है:',

    faqSectionTitle: 'अक्सर पूछे जाने वाले सवाल (FAQ)',
    faqSectionSubtitle: 'आपके मन में उठने वाले सामान्य सवालों के सीधे और ईमानदार जवाब',
    faq1Q: 'अनुमान कितना सही होता है?',
    faq1A: 'यह अनुमान ज़िले के पिछले सरकारी आंकड़ों (राज्य, ज़िला, फसल, सीज़न व क्षेत्रफल) और सामान्य फसल पैदावार के आधार पर निकाला जाता है। सामान्य परिस्थितियों में यह बहुत निकट रहता है।',
    faq2Q: 'अनुमान के लिए क्या जानकारी चाहिए?',
    faq2A: 'सिर्फ 3 बुनियादी बातें: आपका राज्य व ज़िला, फसल व सीज़न, और खेत का क्षेत्रफल (एकड़ या हेक्टेयर)। कोई अतिरिक्त जानकारी नहीं चाहिए।',
    faq3Q: 'क्या फसल साथी पूरी तरह मुफ़्त है?',
    faq3A: 'हाँ, यह सेवा सभी किसान भाइयों के लिए पूरी तरह मुफ़्त है। इसके लिए किसी खाते या भुगतान की आवश्यकता नहीं है।',
    faq4Q: 'क्या यह पैदावार की कानूनी गारंटी है?',
    faq4A: 'नहीं। यह केवल एक संभावित अनुमान है। अचानक ओलावृष्टि, सूखा, कीट-रोग या अत्यधिक बाढ़ जैसी अप्रत्याशित घटनाओं पर किसी मॉडल का नियंत्रण नहीं होता।',
    faq5Q: 'मेरा दर्ज किया गया डेटा कहाँ जाता है?',
    faq5A: 'हम आपका कोई भी व्यक्तिगत डेटा सुरक्षित नहीं रखते और न ही किसी को बेचते हैं। सारा डेटा सिर्फ उसी समय गणना के लिए काम आता है।',

    editorialQuote: 'किसान के लिए, किसान की भाषा में — सही फैसले लेने की ताकत।',
    editorialQuoteSub: 'ज़िले के पिछले सरकारी आंकड़ों और फसल विवरण से अपनी उपज का सटीक अनुमान लगाएं।',

    footerDesc: 'भारतीय किसान भाइयों के लिए सरल, पारदर्शी और उपयोगी कृषि पैदावार अनुमान प्रणाली।',
    footerDisclaimer: 'यह मशीन लर्निंग से निकाला गया अनुमान है, गारंटी नहीं।',

    stepLabel: 'स्टेप',
    ofStep: '/',
    nextBtn: 'आगे →',
    backBtn: '← पीछे',
    submitBtn: 'अनुमान देखें',

    step1Title: 'आपका खेत कहाँ स्थित है?',
    step1Subtitle: 'सटीक ज़िला चुनने से हमें आपके क्षेत्र के पिछले सरकारी पैदावार आंकड़ों से मिलान करने में मदद मिलती है।',
    stateLabel: 'राज्य चुनें',
    statePlaceholder: '-- राज्य चुनें --',
    districtLabel: 'ज़िला चुनें',
    districtPlaceholder: '-- ज़िला चुनें --',
    districtDisabledHelp: 'ज़िला चुनने के लिए पहले ऊपर राज्य चुनें',

    step2Title: 'आप कौन सी फसल बो रहे हैं?',
    step2Subtitle: 'अपनी फसल और मौसम चुनें। फसल चुनते ही सामान्य मौसम अपने-आप सेट हो जाता है।',
    seasonLabel: 'फसल का मौसम (सीज़न)',
    seasonAutoSelectedHelp: 'फसल के आधार पर यह सीज़न चुना गया है। आप चाहें तो बदल सकते हैं।',

    step3Title: 'खेत का क्षेत्रफल कितना है?',
    step3Subtitle: 'अपने खेत का कुल नाप दर्ज करें। हम दोनों इकाइयों (एकड़ व हेक्टेयर) में हिसाब दिखाएंगे।',
    areaLabel: 'खेत का नाप (क्षेत्रफल)',
    areaPlaceholder: 'जैसे 5 या 2.5',


    errSelectState: 'कृपया अपना राज्य चुनें',
    errSelectDistrict: 'कृपया अपना ज़िला चुनें',
    errSelectCrop: 'कृपया अपनी फसल का चुनाव करें',
    errAreaPositive: 'खेत का क्षेत्रफल 0 से अधिक होना चाहिए',

    loadingTitle: 'आपकी फसल का हिसाब लगाया जा रहा है...',
    loadingStep1: 'ज़िले के सरकारी आंकड़े जुटा रहे हैं...',
    loadingStep2: 'ऐतिहासिक पैदावार रिकॉर्ड का मिलान कर रहे हैं...',
    loadingStep3: 'अनुमान और सलाह तैयार हो रही है...',

    resultSummaryPrefix: 'आपके खेत का अनुमान',
    quintal: 'क्विंटल',
    comparisonTitle: 'ज़िले के औसत से तुलना',
    reasonsTitle: 'ऐसा क्यों?',
    reasonsSubtitle: 'यह अनुमान इन मुख्य कारणों पर आधारित है:',
    adviceTitle: 'क्या करें? (कृषि सलाह)',
    adviceSubtitle: 'पैदावार सुधारने और फसल सुरक्षित रखने के उपाय:',
    kvkContactNote: 'विशेष या विस्तृत सलाह के लिए अपने नज़दीकी कृषि विज्ञान केंद्र (KVK) से संपर्क करें।',
    confidenceTitle: 'अनुमान की विश्वसनीयता (कॉन्फिडेंस)',
    confidenceLow: 'कम',
    confidenceMedium: 'मध्यम',
    confidenceHigh: 'ज़्यादा',
    confidenceReasonUnknown: 'ज़िले के ऐतिहासिक सरकारी आंकड़ों और औसत के आधार पर गणना की गई है।',
    confidenceReasonReported: 'ज़िले के ऐतिहासिक आंकड़ों और फसल विवरण के आधार पर गणना की गई है।',
    confidenceReasonCard: 'ज़िले के ऐतिहासिक सरकारी पैदावार रिकॉर्ड के आधार पर गणना की गई है।',
    resultDisclaimer: 'यह मशीन लर्निंग और ऐतिहासिक आंकड़ों से निकाला गया अनुमान है। सूखा, बाढ़, कीट या बीमारी जैसी घटनाएँ इसमें शामिल नहीं हैं।',

    hiwTitle: 'फसल साथी कैसे काम करता है?',
    hiwSubtitle: 'वैज्ञानिक तकनीक, लेकिन किसानों की अपनी सरल भाषा में।',
    limitationsTitle: 'प्रणाली की सीमाएँ (ईमानदार स्वीकारोक्ति)',
    limitationsSubtitle: 'हम चाहते हैं कि किसान भाई इस उपकरण का समझदारी से उपयोग करें:',
    limitation1: 'मौसम का अप्रत्याशित बदलाव (जैसे कटाई के समय बेमौसम बारिश या ओले) किसी भी पूर्व अनुमान को बदल सकता है।',
    limitation2: 'कीट या फफूंद का अचानक हमला होने पर खेत की निरंतर निगरानी आवश्यक है।',
    limitation3: 'यह प्रणाली किसी सरकारी मुआवजे या फसल बीमा दावे का कानूनी प्रमाण नहीं है।',
    limitation4: 'रासायनिक दवाओं या बीजों के चयन से पहले स्थानीय KVK वैज्ञानिक की संस्तुति अवश्य लें।',

    aboutTitle: 'फसल साथी के बारे में',
    aboutSubtitle: 'भारतीय किसानों को डेटा की शक्ति से सशक्त बनाने का एक विनम्र प्रयास।',
    aboutMissionTitle: 'हमारा उद्देश्य',
    aboutMissionDesc: 'अक्सर वैज्ञानिक और उपग्रह आधारित पैदावार मॉडल अंग्रेजी भाषा और जटिल सांख्यिकी में बंद रहते हैं। फसल साथी का उद्देश्य उसी तकनीक को हर भारतीय किसान तक उसकी अपनी भाषा और आसान नाप-तौल (क्विंटल, एकड़) में पहुँचाना है।',
    aboutSimplicityTitle: 'सरलता पहली प्राथमिकता',
    aboutSimplicityDesc: 'हमने इस प्लेटफॉर्म को धीमे इंटरनेट, पुराने स्मार्टफ़ोन और एक हाथ से चलाने के अनुकूल बनाया है। बड़े बटन, साफ लिखावट और न्यूनतम टाइपिंग।',
    aboutKvkTitle: 'कृषि विज्ञान केंद्र (KVK) का महत्व',
    aboutKvkDesc: 'भारत सरकार द्वारा देश के लगभग हर ज़िले में स्थापित KVK किसानों के सच्चे मित्र हैं। हम हर किसान को अपने ब्लॉक या ज़िला KVK से जुड़ने की पुरज़ोर सलाह देते हैं।',
    aboutTollFree: 'किसान कॉल सेंटर टोल-फ्री नंबर: 1800-180-1551',

    dataYearNotice: 'यह अनुमान 2014 तक के ऐतिहासिक कृषि डेटा पर आधारित है, भविष्य के मौसम पूर्वानुमान पर नहीं।',
    dataYearLabel: 'डेटा वर्ष',
    confidenceTypicalError: '(आमतौर पर ~{pct}% का अंतर)',
    aboutAccuracyTitle: 'मॉडल की सटीकता / Model Accuracy',
    aboutAccuracySubtitle: '20% स्वतंत्र परीक्षण डेटा (Hold-out Test Set) पर मापा गया वास्तविक प्रदर्शन:',
    aboutAccuracyMedian: 'आमतौर पर औसत अंतर (Median Error)',
    aboutAccuracyWithin25: 'अनुमान 25% के अंदर',
    aboutAccuracyWithin50: 'अनुमान 50% के अंदर',
    aboutAccuracyLimitation: 'Dataset mein mitti, khad aur mausam ka data nahi hai, isliye sateekta limited hai.',
  },
  en: {
    appName: 'Fasal Saathi',
    appTagline: 'Crop Yield Predictor for Farmers',
    navHome: 'Home',
    navHowItWorks: 'How It Works',
    navAbout: 'About',
    navPredictBtn: 'Predict Yield',
    languageToggle: 'हिंदी',

    heroTitle: 'Know your crop yield in advance',
    heroSubtitle: 'Estimate your yield based on past government data of your district (state, district, crop, season, and farm area) to make smarter farming decisions.',
    heroCta: 'Predict Your Crop Yield',
    heroSecondaryCta: 'How does it work?',
    heroNoAccount: 'No account or sign up required',

    fact1Title: '3 Simple Steps',
    fact1Desc: 'Location, crop, and land size',
    fact2Title: 'Hindi & English',
    fact2Desc: 'Switch languages anytime in one tap',
    fact3Title: 'District Historical Data',
    fact3Desc: 'Linked to official district government records',
    fact4Title: 'Yield in Quintals',
    fact4Desc: 'In standard Indian farming measures',

    timelineSectionTitle: 'How It Works',
    timelineSectionSubtitle: 'A transparent agronomic process translated into clear, actionable advice',
    timelineStep1Title: 'Select Location & Crop',
    timelineStep1Desc: 'Choose your state, district, and current planting crop.',
    timelineStep2Title: 'District Historical Data Lookup',
    timelineStep2Desc: 'Historical government production records and district baselines are matched.',
    timelineStep3Title: 'Agronomic Modeling',
    timelineStep3Desc: 'Model calculates yield based on state, district, crop, season, and farm area.',
    timelineStep4Title: 'Get Estimates & Advisory',
    timelineStep4Desc: 'Clean numbers in Quintals, benchmark comparison, and KVK tips.',

    featuresSectionTitle: 'Key Advantages of Fasal Saathi',
    featuresSectionSubtitle: 'Thoughtfully designed around the realities of Indian smallholder farmers',
    feature1Title: 'We ask only what is necessary',
    feature1Desc: 'No lengthy sign-ups or personal questions; just 3 essential farm details (location, crop, area).',
    feature2Title: 'District historical data is linked automatically',
    feature2Desc: 'District-level past government production data is referenced automatically.',
    feature4Title: 'Results in your units (Quintals/Acre)',
    feature4Desc: 'No confusing scientific metric indices; direct, understandable farm measures.',
    feature6Title: 'Plain-language reasons and advice',
    feature6Desc: 'Top 3 drivers behind your harvest estimate plus practical next steps.',

    showcaseSectionTitle: 'Preview a Sample Result',
    showcaseSectionSubtitle: 'When you submit the 3-step form, you receive a crisp, comprehensive dashboard:',
    showcaseSampleBadge: 'Sample Preview',
    showcasePoint1: 'Estimated total harvest and per-acre productivity breakdown',
    showcasePoint2: 'Visual comparison against the district historical average',
    showcasePoint3: 'Key factors based on historical records and district baselines',
    showcaseTabLabel: 'Preview different rating tiers:',

    cropsSectionTitle: 'Crops We Support',
    cropsSectionSubtitle: 'Major Rabi, Kharif, and Zaid staple crops with district baseline data:',

    faqSectionTitle: 'Frequently Asked Questions (FAQ)',
    faqSectionSubtitle: 'Straightforward answers to the most common questions about the platform',
    faq1Q: 'How accurate is this yield estimate?',
    faq1A: 'Estimates are based on past government data of the district (state, district, crop, season, and farm area). Under normal seasonal conditions, it offers a realistic baseline.',
    faq2Q: 'What information is required to get an estimate?',
    faq2A: 'Just 3 simple details: your state & district, crop & season, and farm area (acres or hectares). No weather or soil testing records needed.',
    faq3Q: 'Is Fasal Saathi completely free?',
    faq3A: 'Yes, 100% free for all farmers. There are no fees, paywalls, or hidden charges.',
    faq4Q: 'Is this a legal yield guarantee?',
    faq4A: 'No. This is an algorithmic prediction. Sudden micro-climate shifts, unseasonal hailstorms, pest attacks, or extreme floods cannot be anticipated in advance.',
    faq5Q: 'What happens to my entered information?',
    faq5A: 'We do not store or sell any personal information. All inputs stay strictly in your browser session for that single prediction.',

    editorialQuote: 'Built for the farmer, in the farmer’s voice — clarity to make better decisions.',
    editorialQuoteSub: 'Estimate your agricultural yield using past government district data and crop details.',

    footerDesc: 'A transparent, farmer-first crop yield prediction platform for Indian agriculture.',
    footerDisclaimer: 'यह मशीन लर्निंग से निकाला गया अनुमान है, गारंटी नहीं। (This is a machine learning estimate, not a guarantee.)',

    stepLabel: 'Step',
    ofStep: 'of',
    nextBtn: 'Next →',
    backBtn: '← Back',
    submitBtn: 'View Yield Estimate',

    step1Title: 'Where is your farm located?',
    step1Subtitle: 'Selecting your district helps us reference historical government agricultural data for your area.',
    stateLabel: 'Select State',
    statePlaceholder: '-- Choose State --',
    districtLabel: 'Select District',
    districtPlaceholder: '-- Choose District --',
    districtDisabledHelp: 'Please choose a state first to see its districts',

    step2Title: 'Which crop are you growing?',
    step2Subtitle: 'Tap your crop and season. Choosing a crop will automatically set the standard season.',
    seasonLabel: 'Growing Season',
    seasonAutoSelectedHelp: 'Season was auto-selected based on crop. You can change it if needed.',

    step3Title: 'What is the size of your field?',
    step3Subtitle: 'Enter your land area. We provide automatic live conversion between Acres and Hectares.',
    areaLabel: 'Land Area',
    areaPlaceholder: 'e.g. 5 or 2.5',


    errSelectState: 'Please select your state',
    errSelectDistrict: 'Please select your district',
    errSelectCrop: 'Please select your crop',
    errAreaPositive: 'Field area must be greater than 0',

    loadingTitle: 'Calculating your harvest estimate...',
    loadingStep1: 'Gathering district government records...',
    loadingStep2: 'Matching historical yield baselines...',
    loadingStep3: 'Generating yield forecast and advisory...',

    resultSummaryPrefix: 'Estimated Harvest for',
    quintal: 'Quintals',
    comparisonTitle: 'District Benchmark Comparison',
    reasonsTitle: 'Why this result?',
    reasonsSubtitle: 'This forecast is shaped by these primary factors:',
    adviceTitle: 'What should you do? (Actionable Advice)',
    adviceSubtitle: 'Recommended actions to safeguard or boost your harvest:',
    kvkContactNote: 'For detailed on-ground consultation, contact your nearest Krishi Vigyan Kendra (KVK).',
    confidenceTitle: 'Estimate Confidence Level',
    confidenceLow: 'Low',
    confidenceMedium: 'Medium',
    confidenceHigh: 'High',
    confidenceReasonUnknown: 'Calculated using district historical government data and averages.',
    confidenceReasonReported: 'Calculated using district historical records and crop details.',
    confidenceReasonCard: 'Calculated with precision using district historical government production records.',
    resultDisclaimer: 'This forecast is calculated via machine learning and regional baselines. Unforeseen disasters like sudden floods, severe unseasonal hailstorms, locusts, or pest epidemics are not covered.',

    hiwTitle: 'How Fasal Saathi Works',
    hiwSubtitle: 'Scientific agronomic modeling translated into simple, farmer-friendly terms.',
    limitationsTitle: 'System Limitations (Transparent Disclosure)',
    limitationsSubtitle: 'We urge farmers to use this estimation tool responsibly:',
    limitation1: 'Abrupt micro-climate shifts (such as unseasonal hail right before harvest) can change field outcomes.',
    limitation2: 'Sudden outbreaks of insect pests require proactive on-the-ground scouting.',
    limitation3: 'This application cannot be used as legal proof for government compensation or PMFBY claims.',
    limitation4: 'Always consult local KVK agronomists before making large capital investments in chemicals or seed varieties.',

    aboutTitle: 'About Fasal Saathi',
    aboutSubtitle: 'Empowering Indian farmers through clear, actionable agricultural insights.',
    aboutMissionTitle: 'Our Mission',
    aboutMissionDesc: 'Agricultural technology often remains locked behind complex dashboards and scientific jargon. Fasal Saathi brings historical district data and yield estimation directly to Indian farmers in their mother tongue and local units.',
    aboutSimplicityTitle: 'Simplicity First',
    aboutSimplicityDesc: 'Crafted for low-bandwidth networks, budget smartphones, and single-hand thumb navigation. High-contrast typography, large touch targets, and minimal typing.',
    aboutKvkTitle: 'Krishi Vigyan Kendra (KVK) Partnership',
    aboutKvkDesc: 'KVKs established across almost every district in India are the true anchors of rural agricultural extension. We actively encourage every farmer to visit their local KVK center.',
    aboutTollFree: 'Kisan Call Centre Toll-Free Helpline: 1800-180-1551',

    dataYearNotice: 'Based on historical agricultural data up to 2014, not future climate forecasts.',
    dataYearLabel: 'Data Year',
    confidenceTypicalError: '(~{pct}% typical error)',
    aboutAccuracyTitle: 'मॉडल की सटीकता / Model Accuracy',
    aboutAccuracySubtitle: 'Real performance measured on a 20% hold-out test set:',
    aboutAccuracyMedian: 'Typical Median Error',
    aboutAccuracyWithin25: 'Predictions within 25%',
    aboutAccuracyWithin50: 'Predictions within 50%',
    aboutAccuracyLimitation: 'Dataset mein mitti, khad aur mausam ka data nahi hai, isliye sateekta limited hai.',
  },
};

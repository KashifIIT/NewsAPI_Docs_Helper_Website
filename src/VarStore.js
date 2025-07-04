import { create } from 'zustand';

const useStore = create((set) => ({

  qValue: "",
  setqValue: (qValue) => set({ qValue }),

  ApiKey: "",
  setApiKey : (ApiKey) => set({ApiKey}),

  q2Value: "",
  setq2Value: (q2Value) => set({ q2Value }),

  Page: 1,
  setPage: (Page) => set({ Page }),

  EveryThing: 0,
  setEveryThing: (EveryThing) => set({ EveryThing }),

  Title: 0,
  setTitle: (Title) => set({ Title }), 
  
  Content: 0,
  setContent: (Content) => set({ Content }),

  Description: 0,
  setDescription: (Description) => set({ Description }),

  SourceArray : [],
  setSourceArray: (SourceArray) => set({ SourceArray }),

  excludeDomainArray : [],
  setexcludeDomainArray: (excludeDomainArray) => set({ excludeDomainArray }),

  Language: "",
  setLanguage: (Language) => set({ Language }),

  SortByValue: "",
  setSortByValue: (SortByValue) => set({ SortByValue }),

  From: "",
  setFrom: (From) => set({ From }),
 
  To: "",
  setTo: (To) => set({ To }),

  PageSize: "",
  setPageSize: (PageSize) => set({ PageSize }),
  
  PageNo: "",
  setPageNo: (PageNo) => set({ PageNo }),

  THQvalue: "",
  setTHQvalue: (THQvalue) => set({ THQvalue }),

  Category: "",
  setCategory: (Category) => set({ Category }),

  TH1PageSize: "",
  setTH1PageSize: (TH1PageSize) => set({ TH1PageSize }),
  
  TH1PageNo: "",
  setTH1PageNo: (TH1PageNo) => set({ TH1PageNo }),

  TH2PageSize: "",
  setTH2PageSize: (TH2PageSize) => set({ TH2PageSize }),
  
  TH2PageNo: "",
  setTH2PageNo: (TH2PageNo) => set({ TH2PageNo }),

  StyleOfLoadingDiv: {width: '0px'},
  setStyleOfLoadingDiv: (StyleOfLoadingDiv) => set({ StyleOfLoadingDiv }),
}));

/*Possible prototype for var and setVar in create funcn:
: 0,
  set: () => set({  }),
  */

export default useStore;
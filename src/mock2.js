const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    "id": "intro",
    "data": {
      "label": "INTRO"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_confirm",
    "data": {
      "label": "Q CONFIRM"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_voted",
    "data": {
      "label": "Q VOTED"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_voted_type_all",
    "data": {
      "label": "Q VOTED TYPE ALL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_voted_type_mail",
    "data": {
      "label": "Q VOTED TYPE MAIL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_voted_type_dropbox",
    "data": {
      "label": "Q VOTED TYPE DROPBOX"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_full",
    "data": {
      "label": "Q PRES VOTED 3P FULL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_full_refuse",
    "data": {
      "label": "Q PRES VOTED 3P FULL REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_rfk",
    "data": {
      "label": "Q PRES VOTED 3P RFK"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_rfk_refuse",
    "data": {
      "label": "Q PRES VOTED 3P RFK REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_west",
    "data": {
      "label": "Q PRES VOTED 3P WEST"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_west_refuse",
    "data": {
      "label": "Q PRES VOTED 3P WEST REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_short",
    "data": {
      "label": "Q PRES VOTED 3P SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_short_refuse",
    "data": {
      "label": "Q PRES VOTED 3P SHORT REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_NV",
    "data": {
      "label": "Q PRES VOTED 3P NV"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_voted_3p_NV_refuse",
    "data": {
      "label": "Q PRES VOTED 3P NV REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_3way_voted_2024",
    "data": {
      "label": "Q SENATE 3WAY VOTED 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_abortion_ballot_voted_2024",
    "data": {
      "label": "Q ABORTION BALLOT VOTED 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_NE_voted_ballot1",
    "data": {
      "label": "Q NE VOTED BALLOT1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_NE_voted_ballot2",
    "data": {
      "label": "Q NE VOTED BALLOT2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_gov_voted_2024",
    "data": {
      "label": "Q GOV VOTED 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_vote",
    "data": {
      "label": "Q VOTE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_vote_type",
    "data": {
      "label": "Q VOTE TYPE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_vote_type_NH",
    "data": {
      "label": "Q VOTE TYPE NH"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_vote_when",
    "data": {
      "label": "Q VOTE WHEN"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres",
    "data": {
      "label": "Q PRES"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push",
    "data": {
      "label": "Q PRES PUSH"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_other_v2",
    "data": {
      "label": "Q PRES OTHER V2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_5way_full",
    "data": {
      "label": "Q PRES 5WAY FULL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push_5way_full",
    "data": {
      "label": "Q PRES PUSH 5WAY FULL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_5way_rfk",
    "data": {
      "label": "Q PRES 5WAY RFK"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push_5way_rfk",
    "data": {
      "label": "Q PRES PUSH 5WAY RFK"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_5way_west",
    "data": {
      "label": "Q PRES 5WAY WEST"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push_5way_west",
    "data": {
      "label": "Q PRES PUSH 5WAY WEST"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_5way_short",
    "data": {
      "label": "Q PRES 5WAY SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push_5way_short",
    "data": {
      "label": "Q PRES PUSH 5WAY SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_5way_NV",
    "data": {
      "label": "Q PRES 5WAY NV"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_push_5way_NV",
    "data": {
      "label": "Q PRES PUSH 5WAY NV"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_consider_harris",
    "data": {
      "label": "Q CONSIDER HARRIS"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_consider_trump",
    "data": {
      "label": "Q CONSIDER TRUMP"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_consider_chase",
    "data": {
      "label": "Q CONSIDER CHASE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_consider_stein",
    "data": {
      "label": "Q CONSIDER STEIN"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_consider_west",
    "data": {
      "label": "Q CONSIDER WEST"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_3way_2024",
    "data": {
      "label": "Q SENATE 3WAY 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_3way_push_2024",
    "data": {
      "label": "Q SENATE 3WAY PUSH 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_3way_2024_AZ",
    "data": {
      "label": "Q SENATE 3WAY 2024 AZ"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_3way_push_2024_AZ",
    "data": {
      "label": "Q SENATE 3WAY PUSH 2024 AZ"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_gov_2024",
    "data": {
      "label": "Q GOV 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_gov_push_2024",
    "data": {
      "label": "Q GOV PUSH 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_abortion_ballot_2024",
    "data": {
      "label": "Q ABORTION BALLOT 2024"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_NE_ballot1",
    "data": {
      "label": "Q NE BALLOT1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_NE_ballot2",
    "data": {
      "label": "Q NE BALLOT2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_byear",
    "data": {
      "label": "Q BYEAR"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_age_bucket",
    "data": {
      "label": "Q AGE BUCKET"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_sex",
    "data": {
      "label": "Q SEX"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_education",
    "data": {
      "label": "Q EDUCATION"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_2020_recall",
    "data": {
      "label": "Q PRES 2020 RECALL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pres_2020_recall_counterfactual",
    "data": {
      "label": "Q PRES 2020 RECALL COUNTERFACTUAL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_senate_2022_recall",
    "data": {
      "label": "Q SENATE 2022 RECALL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_gov_2022_recall",
    "data": {
      "label": "Q GOV 2022 RECALL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_cong_2022_recall",
    "data": {
      "label": "Q CONG 2022 RECALL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_race_hisp",
    "data": {
      "label": "Q RACE HISP"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_race",
    "data": {
      "label": "Q RACE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_country",
    "data": {
      "label": "Q COUNTRY"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_country_asia",
    "data": {
      "label": "Q COUNTRY ASIA"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_home_language",
    "data": {
      "label": "Q HOME LANGUAGE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_first_gen",
    "data": {
      "label": "Q FIRST GEN"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_second_gen",
    "data": {
      "label": "Q SECOND GEN"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_religion",
    "data": {
      "label": "Q RELIGION"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_religion_evang",
    "data": {
      "label": "Q RELIGION EVANG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_state_years",
    "data": {
      "label": "Q STATE YEARS"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_class_combined",
    "data": {
      "label": "Q CLASS COMBINED"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_fav1",
    "data": {
      "label": "Q FAV1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_fav2",
    "data": {
      "label": "Q FAV2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav3_short",
    "data": {
      "label": " Q FAV3 SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav4_short",
    "data": {
      "label": " Q FAV4 SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav5_short",
    "data": {
      "label": " Q FAV5 SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav6_short",
    "data": {
      "label": " Q FAV6 SHORT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav3_long",
    "data": {
      "label": " Q FAV3 LONG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav4_long",
    "data": {
      "label": " Q FAV4 LONG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav5_long",
    "data": {
      "label": " Q FAV5 LONG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav6_long",
    "data": {
      "label": " Q FAV6 LONG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav7_long",
    "data": {
      "label": " Q FAV7 LONG"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav3_long2",
    "data": {
      "label": " Q FAV3 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav4_long2",
    "data": {
      "label": " Q FAV4 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav5_long2",
    "data": {
      "label": " Q FAV5 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav6_long2",
    "data": {
      "label": " Q FAV6 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav7_long2",
    "data": {
      "label": " Q FAV7 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": " q_fav8_long2",
    "data": {
      "label": " Q FAV8 LONG2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_top_issue",
    "data": {
      "label": "Q TOP ISSUE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_pol_impt",
    "data": {
      "label": "Q POL IMPT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_stakes_you",
    "data": {
      "label": "Q STAKES YOU"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait1",
    "data": {
      "label": "Q TRAIT1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait2",
    "data": {
      "label": "Q TRAIT2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait3",
    "data": {
      "label": "Q TRAIT3"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait4",
    "data": {
      "label": "Q TRAIT4"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait5",
    "data": {
      "label": "Q TRAIT5"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trait6",
    "data": {
      "label": "Q TRAIT6"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trust1",
    "data": {
      "label": "Q TRUST1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trust2",
    "data": {
      "label": "Q TRUST2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trust3",
    "data": {
      "label": "Q TRUST3"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trust4",
    "data": {
      "label": "Q TRUST4"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_trust5",
    "data": {
      "label": "Q TRUST5"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_lib1",
    "data": {
      "label": "Q LIB1"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_lib2",
    "data": {
      "label": "Q LIB2"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "q_middle_init",
    "data": {
      "label": "Q MIDDLE INIT"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "close",
    "data": {
      "label": "CLOSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "ineligible",
    "data": {
      "label": "INELIGIBLE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "refusal",
    "data": {
      "label": "REFUSAL"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "panel_opt_in",
    "data": {
      "label": "PANEL OPT IN"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "panel_close",
    "data": {
      "label": "PANEL CLOSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  },
  {
    "id": "panel_refuse",
    "data": {
      "label": "PANEL REFUSE"
    },
    "position": {
      "x": 0,
      "y": 0
    }
  }
];

export const initialEdges = [
  {
    "id": "intro-q_confirm",
    "source": "intro",
    "target": "q_confirm",
    "label": "A1"
  },
  {
    "id": "intro-refusal",
    "source": "intro",
    "target": "refusal",
    "label": "A2"
  },
  {
    "id": "intro-ineligible",
    "source": "intro",
    "target": "ineligible",
    "label": "A3"
  },
  {
    "id": "intro-refusal",
    "source": "intro",
    "target": "refusal",
    "label": "A4"
  },
  {
    "id": "intro-q_confirm",
    "source": "intro",
    "target": "q_confirm",
    "label": "Default"
  },
  {
    "id": "q_confirm-q_vote",
    "source": "q_confirm",
    "target": "q_vote",
    "label": "A1"
  },
  {
    "id": "q_confirm-q_voted",
    "source": "q_confirm",
    "target": "q_voted",
    "label": "A1"
  },
  {
    "id": "q_confirm-ineligible",
    "source": "q_confirm",
    "target": "ineligible",
    "label": "A2"
  },
  {
    "id": "q_confirm-ineligible",
    "source": "q_confirm",
    "target": "ineligible",
    "label": "A3"
  },
  {
    "id": "q_confirm-q_vote",
    "source": "q_confirm",
    "target": "q_vote",
    "label": "Default"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "A1"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "A2"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "A3"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "A4"
  },
  {
    "id": "q_voted-q_byear",
    "source": "q_voted",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "A7"
  },
  {
    "id": "q_voted-ineligible",
    "source": "q_voted",
    "target": "ineligible",
    "label": "A8"
  },
  {
    "id": "q_voted-q_voted_type_all",
    "source": "q_voted",
    "target": "q_voted_type_all",
    "label": "A6"
  },
  {
    "id": "q_voted-q_voted_type_all",
    "source": "q_voted",
    "target": "q_voted_type_all",
    "label": "A6"
  },
  {
    "id": "q_voted-q_voted_type_dropbox",
    "source": "q_voted",
    "target": "q_voted_type_dropbox",
    "label": "A6"
  },
  {
    "id": "q_voted-q_voted_type_mail",
    "source": "q_voted",
    "target": "q_voted_type_mail",
    "label": "A6"
  },
  {
    "id": "q_voted-q_vote_type",
    "source": "q_voted",
    "target": "q_vote_type",
    "label": "Default"
  },
  {
    "id": "q_voted_type_all-ineligible",
    "source": "q_voted_type_all",
    "target": "ineligible",
    "label": "A6"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_full",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_full",
    "label": "A1"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_west",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_west",
    "label": "A1"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_rfk",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_rfk",
    "label": "A0"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_short",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_short",
    "label": "A0"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_NV",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_NV",
    "label": "A0"
  },
  {
    "id": "q_voted_type_all-q_pres_voted_3p_full",
    "source": "q_voted_type_all",
    "target": "q_pres_voted_3p_full",
    "label": "Default"
  },
  {
    "id": "q_voted_type_mail-ineligible",
    "source": "q_voted_type_mail",
    "target": "ineligible",
    "label": "A4"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_full",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_full",
    "label": "A1"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_west",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_west",
    "label": "A1"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_rfk",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_rfk",
    "label": "A0"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_short",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_short",
    "label": "A0"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_NV",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_NV",
    "label": "A0"
  },
  {
    "id": "q_voted_type_mail-q_pres_voted_3p_full",
    "source": "q_voted_type_mail",
    "target": "q_pres_voted_3p_full",
    "label": "Default"
  },
  {
    "id": "q_voted_type_dropbox-ineligible",
    "source": "q_voted_type_dropbox",
    "target": "ineligible",
    "label": "A5"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_full",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_full",
    "label": "A1"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_west",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_west",
    "label": "A1"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_rfk",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_rfk",
    "label": "A0"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_short",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_short",
    "label": "A0"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_NV",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_NV",
    "label": "A0"
  },
  {
    "id": "q_voted_type_dropbox-q_pres_voted_3p_full",
    "source": "q_voted_type_dropbox",
    "target": "q_pres_voted_3p_full",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_full-q_pres_voted_3p_full_refuse",
    "source": "q_pres_voted_3p_full",
    "target": "q_pres_voted_3p_full_refuse",
    "label": "A8"
  },
  {
    "id": "q_pres_voted_3p_full-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_full",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_full-q_gov_voted_2024",
    "source": "q_pres_voted_3p_full",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_full-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_full",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_full_refuse-ineligible",
    "source": "q_pres_voted_3p_full_refuse",
    "target": "ineligible",
    "label": "A8"
  },
  {
    "id": "q_pres_voted_3p_full_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_full_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_full_refuse-q_gov_voted_2024",
    "source": "q_pres_voted_3p_full_refuse",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_full_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_full_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_rfk-q_pres_voted_3p_rfk_refuse",
    "source": "q_pres_voted_3p_rfk",
    "target": "q_pres_voted_3p_rfk_refuse",
    "label": "A7"
  },
  {
    "id": "q_pres_voted_3p_rfk-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_rfk",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_rfk-q_gov_voted_2024",
    "source": "q_pres_voted_3p_rfk",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_rfk-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_rfk",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_rfk_refuse-ineligible",
    "source": "q_pres_voted_3p_rfk_refuse",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_pres_voted_3p_rfk_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_rfk_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_rfk_refuse-q_gov_voted_2024",
    "source": "q_pres_voted_3p_rfk_refuse",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_rfk_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_rfk_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_west-q_pres_voted_3p_west_refuse",
    "source": "q_pres_voted_3p_west",
    "target": "q_pres_voted_3p_west_refuse",
    "label": "A7"
  },
  {
    "id": "q_pres_voted_3p_west-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_west",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west-q_gov_voted_2024",
    "source": "q_pres_voted_3p_west",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west-q_NE_voted_ballot1",
    "source": "q_pres_voted_3p_west",
    "target": "q_NE_voted_ballot1",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_west",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_west_refuse-ineligible",
    "source": "q_pres_voted_3p_west_refuse",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_pres_voted_3p_west_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_west_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west_refuse-q_gov_voted_2024",
    "source": "q_pres_voted_3p_west_refuse",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west_refuse-q_NE_voted_ballot1",
    "source": "q_pres_voted_3p_west_refuse",
    "target": "q_NE_voted_ballot1",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_west_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_west_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_short-q_pres_voted_3p_short_refuse",
    "source": "q_pres_voted_3p_short",
    "target": "q_pres_voted_3p_short_refuse",
    "label": "A6"
  },
  {
    "id": "q_pres_voted_3p_short-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_short",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_short-q_gov_voted_2024",
    "source": "q_pres_voted_3p_short",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_short-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_short",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_short_refuse-ineligible",
    "source": "q_pres_voted_3p_short_refuse",
    "target": "ineligible",
    "label": "A6"
  },
  {
    "id": "q_pres_voted_3p_short_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_short_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_short_refuse-q_gov_voted_2024",
    "source": "q_pres_voted_3p_short_refuse",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_short_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_short_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_NV-q_pres_voted_3p_NV_refuse",
    "source": "q_pres_voted_3p_NV",
    "target": "q_pres_voted_3p_NV_refuse",
    "label": "A5"
  },
  {
    "id": "q_pres_voted_3p_NV-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_NV",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_NV-q_gov_voted_2024",
    "source": "q_pres_voted_3p_NV",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_NV-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_NV",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_pres_voted_3p_NV_refuse-ineligible",
    "source": "q_pres_voted_3p_NV_refuse",
    "target": "ineligible",
    "label": "A6"
  },
  {
    "id": "q_pres_voted_3p_NV_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_NV_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_NV_refuse-q_gov_voted_2024",
    "source": "q_pres_voted_3p_NV_refuse",
    "target": "q_gov_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_pres_voted_3p_NV_refuse-q_senate_3way_voted_2024",
    "source": "q_pres_voted_3p_NV_refuse",
    "target": "q_senate_3way_voted_2024",
    "label": "Default"
  },
  {
    "id": "q_senate_3way_voted_2024-q_abortion_ballot_voted_2024",
    "source": "q_senate_3way_voted_2024",
    "target": "q_abortion_ballot_voted_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_voted_2024-q_byear",
    "source": "q_senate_3way_voted_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_abortion_ballot_voted_2024-q_byear",
    "source": "q_abortion_ballot_voted_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_NE_voted_ballot1-q_NE_voted_ballot2",
    "source": "q_NE_voted_ballot1",
    "target": "q_NE_voted_ballot2",
    "label": "Default"
  },
  {
    "id": "q_NE_voted_ballot2-q_byear",
    "source": "q_NE_voted_ballot2",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_gov_voted_2024-q_byear",
    "source": "q_gov_voted_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_vote-q_vote_type_NH",
    "source": "q_vote",
    "target": "q_vote_type_NH",
    "label": "A1"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "A1"
  },
  {
    "id": "q_vote-q_vote_type_NH",
    "source": "q_vote",
    "target": "q_vote_type_NH",
    "label": "A2"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "A2"
  },
  {
    "id": "q_vote-q_vote_type_NH",
    "source": "q_vote",
    "target": "q_vote_type_NH",
    "label": "A3"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "A3"
  },
  {
    "id": "q_vote-q_vote_type_NH",
    "source": "q_vote",
    "target": "q_vote_type_NH",
    "label": "A4"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "A4"
  },
  {
    "id": "q_vote-q_byear",
    "source": "q_vote",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_vote-q_vote_type_NH",
    "source": "q_vote",
    "target": "q_vote_type_NH",
    "label": "A6"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "A6"
  },
  {
    "id": "q_vote-ineligible",
    "source": "q_vote",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_vote-q_vote_type",
    "source": "q_vote",
    "target": "q_vote_type",
    "label": "Default"
  },
  {
    "id": "q_vote_type-q_pres",
    "source": "q_vote_type",
    "target": "q_pres",
    "label": "A1"
  },
  {
    "id": "q_vote_type-q_vote_when",
    "source": "q_vote_type",
    "target": "q_vote_when",
    "label": "A2"
  },
  {
    "id": "q_vote_type-q_vote_when",
    "source": "q_vote_type",
    "target": "q_vote_when",
    "label": "A3"
  },
  {
    "id": "q_vote_type-q_vote_when",
    "source": "q_vote_type",
    "target": "q_vote_when",
    "label": "A4"
  },
  {
    "id": "q_vote_type-q_byear",
    "source": "q_vote_type",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_vote_type-q_vote_when",
    "source": "q_vote_type",
    "target": "q_vote_when",
    "label": "A6"
  },
  {
    "id": "q_vote_type-ineligible",
    "source": "q_vote_type",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_vote_type-q_vote_when",
    "source": "q_vote_type",
    "target": "q_vote_when",
    "label": "Default"
  },
  {
    "id": "q_vote_type_NH-q_pres",
    "source": "q_vote_type_NH",
    "target": "q_pres",
    "label": "A1"
  },
  {
    "id": "q_vote_type_NH-q_vote_when",
    "source": "q_vote_type_NH",
    "target": "q_vote_when",
    "label": "A2"
  },
  {
    "id": "q_vote_type_NH-q_byear",
    "source": "q_vote_type_NH",
    "target": "q_byear",
    "label": "A3"
  },
  {
    "id": "q_vote_type_NH-q_vote_when",
    "source": "q_vote_type_NH",
    "target": "q_vote_when",
    "label": "A4"
  },
  {
    "id": "q_vote_type_NH-ineligible",
    "source": "q_vote_type_NH",
    "target": "ineligible",
    "label": "A5"
  },
  {
    "id": "q_vote_type_NH-q_pres",
    "source": "q_vote_type_NH",
    "target": "q_pres",
    "label": "Default"
  },
  {
    "id": "q_vote_when-q_pres",
    "source": "q_vote_when",
    "target": "q_pres",
    "label": "A1"
  },
  {
    "id": "q_vote_when-q_pres",
    "source": "q_vote_when",
    "target": "q_pres",
    "label": "A2"
  },
  {
    "id": "q_vote_when-q_pres",
    "source": "q_vote_when",
    "target": "q_pres",
    "label": "A3"
  },
  {
    "id": "q_vote_when-q_pres",
    "source": "q_vote_when",
    "target": "q_pres",
    "label": "A4"
  },
  {
    "id": "q_vote_when-ineligible",
    "source": "q_vote_when",
    "target": "ineligible",
    "label": "A5"
  },
  {
    "id": "q_vote_when-q_pres",
    "source": "q_vote_when",
    "target": "q_pres",
    "label": "Default"
  },
  {
    "id": "q_pres-q_pres_5way_west",
    "source": "q_pres",
    "target": "q_pres_5way_west",
    "label": "A1"
  },
  {
    "id": "q_pres-q_pres_5way_short",
    "source": "q_pres",
    "target": "q_pres_5way_short",
    "label": "A1"
  },
  {
    "id": "q_pres-q_pres_5way_west",
    "source": "q_pres",
    "target": "q_pres_5way_west",
    "label": "A2"
  },
  {
    "id": "q_pres-q_pres_5way_short",
    "source": "q_pres",
    "target": "q_pres_5way_short",
    "label": "A2"
  },
  {
    "id": "q_pres-q_pres_push",
    "source": "q_pres",
    "target": "q_pres_push",
    "label": "A3"
  },
  {
    "id": "q_pres-q_pres_push",
    "source": "q_pres",
    "target": "q_pres_push",
    "label": "A4"
  },
  {
    "id": "q_pres-q_pres_5way_west",
    "source": "q_pres",
    "target": "q_pres_5way_west",
    "label": "A5"
  },
  {
    "id": "q_pres-q_pres_5way_short",
    "source": "q_pres",
    "target": "q_pres_5way_short",
    "label": "A5"
  },
  {
    "id": "q_pres-ineligible",
    "source": "q_pres",
    "target": "ineligible",
    "label": "A6"
  },
  {
    "id": "q_pres-q_pres_5way_full",
    "source": "q_pres",
    "target": "q_pres_5way_full",
    "label": "A1"
  },
  {
    "id": "q_pres-q_pres_5way_rfk",
    "source": "q_pres",
    "target": "q_pres_5way_rfk",
    "label": "A1"
  },
  {
    "id": "q_pres-q_pres_5way_full",
    "source": "q_pres",
    "target": "q_pres_5way_full",
    "label": "A2"
  },
  {
    "id": "q_pres-q_pres_5way_rfk",
    "source": "q_pres",
    "target": "q_pres_5way_rfk",
    "label": "A2"
  },
  {
    "id": "q_pres-q_pres_5way_full",
    "source": "q_pres",
    "target": "q_pres_5way_full",
    "label": "A5"
  },
  {
    "id": "q_pres-q_pres_5way_rfk",
    "source": "q_pres",
    "target": "q_pres_5way_rfk",
    "label": "A5"
  },
  {
    "id": "q_pres-q_pres_5way_NV",
    "source": "q_pres",
    "target": "q_pres_5way_NV",
    "label": "A1"
  },
  {
    "id": "q_pres-q_pres_5way_NV",
    "source": "q_pres",
    "target": "q_pres_5way_NV",
    "label": "A2"
  },
  {
    "id": "q_pres-q_pres_5way_NV",
    "source": "q_pres",
    "target": "q_pres_5way_NV",
    "label": "A5"
  },
  {
    "id": "q_pres-q_pres_push",
    "source": "q_pres",
    "target": "q_pres_push",
    "label": "Default"
  },
  {
    "id": "q_pres_push-q_pres_5way_west",
    "source": "q_pres_push",
    "target": "q_pres_5way_west",
    "label": "A1"
  },
  {
    "id": "q_pres_push-q_pres_5way_short",
    "source": "q_pres_push",
    "target": "q_pres_5way_short",
    "label": "A1"
  },
  {
    "id": "q_pres_push-q_pres_5way_west",
    "source": "q_pres_push",
    "target": "q_pres_5way_west",
    "label": "A2"
  },
  {
    "id": "q_pres_push-q_pres_5way_short",
    "source": "q_pres_push",
    "target": "q_pres_5way_short",
    "label": "A2"
  },
  {
    "id": "q_pres_push-q_pres_other_v2",
    "source": "q_pres_push",
    "target": "q_pres_other_v2",
    "label": "A3"
  },
  {
    "id": "q_pres_push-q_pres_5way_west",
    "source": "q_pres_push",
    "target": "q_pres_5way_west",
    "label": "A4"
  },
  {
    "id": "q_pres_push-q_pres_5way_short",
    "source": "q_pres_push",
    "target": "q_pres_5way_short",
    "label": "A4"
  },
  {
    "id": "q_pres_push-q_pres_5way_west",
    "source": "q_pres_push",
    "target": "q_pres_5way_west",
    "label": "A5"
  },
  {
    "id": "q_pres_push-q_pres_5way_short",
    "source": "q_pres_push",
    "target": "q_pres_5way_short",
    "label": "A5"
  },
  {
    "id": "q_pres_push-ineligible",
    "source": "q_pres_push",
    "target": "ineligible",
    "label": "A6"
  },
  {
    "id": "q_pres_push-q_pres_5way_full",
    "source": "q_pres_push",
    "target": "q_pres_5way_full",
    "label": "A1"
  },
  {
    "id": "q_pres_push-q_pres_5way_rfk",
    "source": "q_pres_push",
    "target": "q_pres_5way_rfk",
    "label": "A1"
  },
  {
    "id": "q_pres_push-q_pres_5way_full",
    "source": "q_pres_push",
    "target": "q_pres_5way_full",
    "label": "A2"
  },
  {
    "id": "q_pres_push-q_pres_5way_rfk",
    "source": "q_pres_push",
    "target": "q_pres_5way_rfk",
    "label": "A2"
  },
  {
    "id": "q_pres_push-q_pres_5way_full",
    "source": "q_pres_push",
    "target": "q_pres_5way_full",
    "label": "A4"
  },
  {
    "id": "q_pres_push-q_pres_5way_rfk",
    "source": "q_pres_push",
    "target": "q_pres_5way_rfk",
    "label": "A4"
  },
  {
    "id": "q_pres_push-q_pres_5way_full",
    "source": "q_pres_push",
    "target": "q_pres_5way_full",
    "label": "A5"
  },
  {
    "id": "q_pres_push-q_pres_5way_rfk",
    "source": "q_pres_push",
    "target": "q_pres_5way_rfk",
    "label": "A5"
  },
  {
    "id": "q_pres_push-q_pres_5way_NV",
    "source": "q_pres_push",
    "target": "q_pres_5way_NV",
    "label": "A1"
  },
  {
    "id": "q_pres_push-q_pres_5way_NV",
    "source": "q_pres_push",
    "target": "q_pres_5way_NV",
    "label": "A2"
  },
  {
    "id": "q_pres_push-q_pres_5way_NV",
    "source": "q_pres_push",
    "target": "q_pres_5way_NV",
    "label": "A4"
  },
  {
    "id": "q_pres_push-q_pres_5way_NV",
    "source": "q_pres_push",
    "target": "q_pres_5way_NV",
    "label": "A5"
  },
  {
    "id": "q_pres_push-q_pres_5way_west",
    "source": "q_pres_push",
    "target": "q_pres_5way_west",
    "label": "Default"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_west",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_west",
    "label": "A1"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_short",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_short",
    "label": "A0"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_rfk",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_rfk",
    "label": "A0"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_full",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_full",
    "label": "A1"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_NV",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_NV",
    "label": "A1"
  },
  {
    "id": "q_pres_other_v2-q_pres_5way_west",
    "source": "q_pres_other_v2",
    "target": "q_pres_5way_west",
    "label": "Default"
  },
  {
    "id": "q_pres_5way_full-q_consider_trump",
    "source": "q_pres_5way_full",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_full-q_consider_trump",
    "source": "q_pres_5way_full",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_5way_full-q_pres_push_5way_full",
    "source": "q_pres_5way_full",
    "target": "q_pres_push_5way_full",
    "label": "A7"
  },
  {
    "id": "q_pres_5way_full-q_pres_push_5way_full",
    "source": "q_pres_5way_full",
    "target": "q_pres_push_5way_full",
    "label": "A8"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "A9"
  },
  {
    "id": "q_pres_5way_full-ineligible",
    "source": "q_pres_5way_full",
    "target": "ineligible",
    "label": "A10"
  },
  {
    "id": "q_pres_5way_full-q_consider_harris",
    "source": "q_pres_5way_full",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_trump",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_trump",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A7"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "A9"
  },
  {
    "id": "q_pres_push_5way_full-ineligible",
    "source": "q_pres_push_5way_full",
    "target": "ineligible",
    "label": "A10"
  },
  {
    "id": "q_pres_push_5way_full-q_consider_harris",
    "source": "q_pres_push_5way_full",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_trump",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_trump",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_5way_rfk-q_pres_push_5way_rfk",
    "source": "q_pres_5way_rfk",
    "target": "q_pres_push_5way_rfk",
    "label": "A6"
  },
  {
    "id": "q_pres_5way_rfk-q_pres_push_5way_rfk",
    "source": "q_pres_5way_rfk",
    "target": "q_pres_push_5way_rfk",
    "label": "A7"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_5way_rfk-ineligible",
    "source": "q_pres_5way_rfk",
    "target": "ineligible",
    "label": "A9"
  },
  {
    "id": "q_pres_5way_rfk-q_consider_harris",
    "source": "q_pres_5way_rfk",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_trump",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_trump",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A7"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_push_5way_rfk-ineligible",
    "source": "q_pres_push_5way_rfk",
    "target": "ineligible",
    "label": "A9"
  },
  {
    "id": "q_pres_push_5way_rfk-q_consider_harris",
    "source": "q_pres_push_5way_rfk",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_5way_west-q_consider_trump",
    "source": "q_pres_5way_west",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_west-q_consider_trump",
    "source": "q_pres_5way_west",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_5way_west-q_pres_push_5way_west",
    "source": "q_pres_5way_west",
    "target": "q_pres_push_5way_west",
    "label": "A6"
  },
  {
    "id": "q_pres_5way_west-q_pres_push_5way_west",
    "source": "q_pres_5way_west",
    "target": "q_pres_push_5way_west",
    "label": "A7"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_5way_west-ineligible",
    "source": "q_pres_5way_west",
    "target": "ineligible",
    "label": "A9"
  },
  {
    "id": "q_pres_5way_west-q_consider_harris",
    "source": "q_pres_5way_west",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_trump",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_trump",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A7"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_push_5way_west-ineligible",
    "source": "q_pres_push_5way_west",
    "target": "ineligible",
    "label": "A9"
  },
  {
    "id": "q_pres_push_5way_west-q_consider_harris",
    "source": "q_pres_push_5way_west",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_5way_short-q_consider_trump",
    "source": "q_pres_5way_short",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_short-q_consider_trump",
    "source": "q_pres_5way_short",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_5way_short-q_pres_push_5way_short",
    "source": "q_pres_5way_short",
    "target": "q_pres_push_5way_short",
    "label": "A5"
  },
  {
    "id": "q_pres_5way_short-q_pres_push_5way_short",
    "source": "q_pres_5way_short",
    "target": "q_pres_push_5way_short",
    "label": "A6"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "A7"
  },
  {
    "id": "q_pres_5way_short-ineligible",
    "source": "q_pres_5way_short",
    "target": "ineligible",
    "label": "A8"
  },
  {
    "id": "q_pres_5way_short-q_consider_harris",
    "source": "q_pres_5way_short",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_trump",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_trump",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A7"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "A8"
  },
  {
    "id": "q_pres_push_5way_short-q_consider_harris",
    "source": "q_pres_push_5way_short",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_5way_NV-q_consider_trump",
    "source": "q_pres_5way_NV",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_NV-q_consider_harris",
    "source": "q_pres_5way_NV",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_5way_NV-q_consider_harris",
    "source": "q_pres_5way_NV",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_NV-q_consider_trump",
    "source": "q_pres_5way_NV",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_5way_NV-q_consider_harris",
    "source": "q_pres_5way_NV",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_5way_NV-q_pres_push_5way_NV",
    "source": "q_pres_5way_NV",
    "target": "q_pres_push_5way_NV",
    "label": "A4"
  },
  {
    "id": "q_pres_5way_NV-q_pres_push_5way_NV",
    "source": "q_pres_5way_NV",
    "target": "q_pres_push_5way_NV",
    "label": "A5"
  },
  {
    "id": "q_pres_5way_NV-q_consider_harris",
    "source": "q_pres_5way_NV",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_5way_NV-ineligible",
    "source": "q_pres_5way_NV",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_pres_5way_NV-q_consider_harris",
    "source": "q_pres_5way_NV",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_trump",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_trump",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A1"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_trump",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_trump",
    "label": "A2"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A3"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A4"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A5"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "A6"
  },
  {
    "id": "q_pres_push_5way_NV-ineligible",
    "source": "q_pres_push_5way_NV",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_pres_push_5way_NV-q_consider_harris",
    "source": "q_pres_push_5way_NV",
    "target": "q_consider_harris",
    "label": "Default"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A1"
  },
  {
    "id": "q_consider_harris-q_consider_chase",
    "source": "q_consider_harris",
    "target": "q_consider_chase",
    "label": "A2"
  },
  {
    "id": "q_consider_harris-q_consider_trump",
    "source": "q_consider_harris",
    "target": "q_consider_trump",
    "label": "Default"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A6"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A6"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A4"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A4"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A5"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A5"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A5"
  },
  {
    "id": "q_consider_trump-q_consider_stein",
    "source": "q_consider_trump",
    "target": "q_consider_stein",
    "label": "A5"
  },
  {
    "id": "q_consider_trump-q_senate_3way_2024",
    "source": "q_consider_trump",
    "target": "q_senate_3way_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_trump-q_senate_3way_2024",
    "source": "q_consider_trump",
    "target": "q_senate_3way_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_trump-q_consider_chase",
    "source": "q_consider_trump",
    "target": "q_consider_chase",
    "label": "Default"
  },
  {
    "id": "q_consider_chase-q_consider_west",
    "source": "q_consider_chase",
    "target": "q_consider_west",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_consider_west",
    "source": "q_consider_chase",
    "target": "q_consider_west",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024_AZ",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024_AZ",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_gov_2024",
    "source": "q_consider_chase",
    "target": "q_gov_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_byear",
    "source": "q_consider_chase",
    "target": "q_byear",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024_AZ",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024_AZ",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_gov_2024",
    "source": "q_consider_chase",
    "target": "q_gov_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_byear",
    "source": "q_consider_chase",
    "target": "q_byear",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_abortion_ballot_2024",
    "source": "q_consider_chase",
    "target": "q_abortion_ballot_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_abortion_ballot_2024",
    "source": "q_consider_chase",
    "target": "q_abortion_ballot_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_chase-q_consider_west",
    "source": "q_consider_chase",
    "target": "q_consider_west",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_consider_west",
    "source": "q_consider_chase",
    "target": "q_consider_west",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024_AZ",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024_AZ",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_gov_2024",
    "source": "q_consider_chase",
    "target": "q_gov_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_byear",
    "source": "q_consider_chase",
    "target": "q_byear",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_abortion_ballot_2024",
    "source": "q_consider_chase",
    "target": "q_abortion_ballot_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024_AZ",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024_AZ",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_gov_2024",
    "source": "q_consider_chase",
    "target": "q_gov_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_byear",
    "source": "q_consider_chase",
    "target": "q_byear",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_abortion_ballot_2024",
    "source": "q_consider_chase",
    "target": "q_abortion_ballot_2024",
    "label": "A3"
  },
  {
    "id": "q_consider_chase-q_senate_3way_2024",
    "source": "q_consider_chase",
    "target": "q_senate_3way_2024",
    "label": "A1"
  },
  {
    "id": "q_consider_chase-q_consider_stein",
    "source": "q_consider_chase",
    "target": "q_consider_stein",
    "label": "Default"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024_AZ",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024_AZ",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_gov_2024",
    "source": "q_consider_stein",
    "target": "q_gov_2024",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024_AZ",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024_AZ",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_gov_2024",
    "source": "q_consider_stein",
    "target": "q_gov_2024",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_byear",
    "source": "q_consider_stein",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_byear",
    "source": "q_consider_stein",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024",
    "label": "A0"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024_AZ",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024_AZ",
    "label": "A0"
  },
  {
    "id": "q_consider_stein-q_gov_2024",
    "source": "q_consider_stein",
    "target": "q_gov_2024",
    "label": "A0"
  },
  {
    "id": "q_consider_stein-q_byear",
    "source": "q_consider_stein",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_consider_stein-q_abortion_ballot_2024",
    "source": "q_consider_stein",
    "target": "q_abortion_ballot_2024",
    "label": "A0"
  },
  {
    "id": "q_consider_stein-q_abortion_ballot_2024",
    "source": "q_consider_stein",
    "target": "q_abortion_ballot_2024",
    "label": "A5"
  },
  {
    "id": "q_consider_stein-q_abortion_ballot_2024",
    "source": "q_consider_stein",
    "target": "q_abortion_ballot_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024_AZ",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024_AZ",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_gov_2024",
    "source": "q_consider_stein",
    "target": "q_gov_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_byear",
    "source": "q_consider_stein",
    "target": "q_byear",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_abortion_ballot_2024",
    "source": "q_consider_stein",
    "target": "q_abortion_ballot_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_senate_3way_2024_AZ",
    "source": "q_consider_stein",
    "target": "q_senate_3way_2024_AZ",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_gov_2024",
    "source": "q_consider_stein",
    "target": "q_gov_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_byear",
    "source": "q_consider_stein",
    "target": "q_byear",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_abortion_ballot_2024",
    "source": "q_consider_stein",
    "target": "q_abortion_ballot_2024",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_NE_ballot1",
    "source": "q_consider_stein",
    "target": "q_NE_ballot1",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_NE_ballot1",
    "source": "q_consider_stein",
    "target": "q_NE_ballot1",
    "label": "A4"
  },
  {
    "id": "q_consider_stein-q_consider_west",
    "source": "q_consider_stein",
    "target": "q_consider_west",
    "label": "Default"
  },
  {
    "id": "q_consider_west-q_senate_3way_2024",
    "source": "q_consider_west",
    "target": "q_senate_3way_2024",
    "label": "A1"
  },
  {
    "id": "q_consider_west-q_senate_3way_2024_AZ",
    "source": "q_consider_west",
    "target": "q_senate_3way_2024_AZ",
    "label": "A1"
  },
  {
    "id": "q_consider_west-q_gov_2024",
    "source": "q_consider_west",
    "target": "q_gov_2024",
    "label": "A0"
  },
  {
    "id": "q_consider_west-q_abortion_ballot_2024",
    "source": "q_consider_west",
    "target": "q_abortion_ballot_2024",
    "label": "A0"
  },
  {
    "id": "q_consider_west-q_byear",
    "source": "q_consider_west",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_consider_west-q_NE_ballot1",
    "source": "q_consider_west",
    "target": "q_NE_ballot1",
    "label": "A1"
  },
  {
    "id": "q_consider_west-q_byear",
    "source": "q_consider_west",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_senate_3way_2024-q_senate_3way_push_2024",
    "source": "q_senate_3way_2024",
    "target": "q_senate_3way_push_2024",
    "label": "A3"
  },
  {
    "id": "q_senate_3way_2024-q_senate_3way_push_2024",
    "source": "q_senate_3way_2024",
    "target": "q_senate_3way_push_2024",
    "label": "A4"
  },
  {
    "id": "q_senate_3way_2024-q_abortion_ballot_2024",
    "source": "q_senate_3way_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024-q_abortion_ballot_2024",
    "source": "q_senate_3way_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024-q_abortion_ballot_2024",
    "source": "q_senate_3way_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024-q_abortion_ballot_2024",
    "source": "q_senate_3way_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024-q_byear",
    "source": "q_senate_3way_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024-q_byear",
    "source": "q_senate_3way_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024-q_byear",
    "source": "q_senate_3way_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024-q_byear",
    "source": "q_senate_3way_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024-q_NE_ballot1",
    "source": "q_senate_3way_2024",
    "target": "q_NE_ballot1",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024-q_NE_ballot1",
    "source": "q_senate_3way_2024",
    "target": "q_NE_ballot1",
    "label": "A2"
  },
  {
    "id": "q_senate_3way_2024-q_NE_ballot1",
    "source": "q_senate_3way_2024",
    "target": "q_NE_ballot1",
    "label": "A5"
  },
  {
    "id": "q_senate_3way_2024-q_NE_ballot1",
    "source": "q_senate_3way_2024",
    "target": "q_NE_ballot1",
    "label": "A6"
  },
  {
    "id": "q_senate_3way_2024-q_byear",
    "source": "q_senate_3way_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_senate_3way_push_2024-q_gov_2024",
    "source": "q_senate_3way_push_2024",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_push_2024-q_abortion_ballot_2024",
    "source": "q_senate_3way_push_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_push_2024-q_byear",
    "source": "q_senate_3way_push_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_push_2024-q_NE_ballot1",
    "source": "q_senate_3way_push_2024",
    "target": "q_NE_ballot1",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_push_2024-q_byear",
    "source": "q_senate_3way_push_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_senate_3way_push_2024_AZ",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_senate_3way_push_2024_AZ",
    "label": "A4"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_senate_3way_push_2024_AZ",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_senate_3way_push_2024_AZ",
    "label": "A5"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_2024_AZ-q_byear",
    "source": "q_senate_3way_2024_AZ",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_senate_3way_push_2024_AZ-q_gov_2024",
    "source": "q_senate_3way_push_2024_AZ",
    "target": "q_gov_2024",
    "label": "A1"
  },
  {
    "id": "q_senate_3way_push_2024_AZ-q_abortion_ballot_2024",
    "source": "q_senate_3way_push_2024_AZ",
    "target": "q_abortion_ballot_2024",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_push_2024_AZ-q_byear",
    "source": "q_senate_3way_push_2024_AZ",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_senate_3way_push_2024_AZ-q_byear",
    "source": "q_senate_3way_push_2024_AZ",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_gov_2024-q_gov_push_2024",
    "source": "q_gov_2024",
    "target": "q_gov_push_2024",
    "label": "A3"
  },
  {
    "id": "q_gov_2024-q_gov_push_2024",
    "source": "q_gov_2024",
    "target": "q_gov_push_2024",
    "label": "A4"
  },
  {
    "id": "q_gov_2024-q_abortion_ballot_2024",
    "source": "q_gov_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_gov_2024-q_abortion_ballot_2024",
    "source": "q_gov_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A2"
  },
  {
    "id": "q_gov_2024-q_abortion_ballot_2024",
    "source": "q_gov_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A5"
  },
  {
    "id": "q_gov_2024-q_abortion_ballot_2024",
    "source": "q_gov_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A6"
  },
  {
    "id": "q_gov_2024-q_byear",
    "source": "q_gov_2024",
    "target": "q_byear",
    "label": "A1"
  },
  {
    "id": "q_gov_2024-q_byear",
    "source": "q_gov_2024",
    "target": "q_byear",
    "label": "A2"
  },
  {
    "id": "q_gov_2024-q_byear",
    "source": "q_gov_2024",
    "target": "q_byear",
    "label": "A5"
  },
  {
    "id": "q_gov_2024-q_byear",
    "source": "q_gov_2024",
    "target": "q_byear",
    "label": "A6"
  },
  {
    "id": "q_gov_2024-q_byear",
    "source": "q_gov_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_gov_push_2024-q_abortion_ballot_2024",
    "source": "q_gov_push_2024",
    "target": "q_abortion_ballot_2024",
    "label": "A1"
  },
  {
    "id": "q_gov_push_2024-q_byear",
    "source": "q_gov_push_2024",
    "target": "q_byear",
    "label": "A0"
  },
  {
    "id": "q_gov_push_2024-q_byear",
    "source": "q_gov_push_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_abortion_ballot_2024-q_byear",
    "source": "q_abortion_ballot_2024",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_NE_ballot1-q_NE_ballot2",
    "source": "q_NE_ballot1",
    "target": "q_NE_ballot2",
    "label": "Default"
  },
  {
    "id": "q_NE_ballot2-q_byear",
    "source": "q_NE_ballot2",
    "target": "q_byear",
    "label": "Default"
  },
  {
    "id": "q_byear-q_age_bucket",
    "source": "q_byear",
    "target": "q_age_bucket",
    "label": "A1"
  },
  {
    "id": "q_byear-q_sex",
    "source": "q_byear",
    "target": "q_sex",
    "label": "A2"
  },
  {
    "id": "q_byear-q_age_bucket",
    "source": "q_byear",
    "target": "q_age_bucket",
    "label": "A3"
  },
  {
    "id": "q_byear-q_age_bucket",
    "source": "q_byear",
    "target": "q_age_bucket",
    "label": "A4"
  },
  {
    "id": "q_byear-q_sex",
    "source": "q_byear",
    "target": "q_sex",
    "label": "Default"
  },
  {
    "id": "q_age_bucket-ineligible",
    "source": "q_age_bucket",
    "target": "ineligible",
    "label": "A7"
  },
  {
    "id": "q_age_bucket-q_sex",
    "source": "q_age_bucket",
    "target": "q_sex",
    "label": "Default"
  },
  {
    "id": "q_sex-ineligible",
    "source": "q_sex",
    "target": "ineligible",
    "label": "A4"
  },
  {
    "id": "q_sex-q_education",
    "source": "q_sex",
    "target": "q_education",
    "label": "Default"
  },
  {
    "id": "q_education-q_pres_2020_recall",
    "source": "q_education",
    "target": "q_pres_2020_recall",
    "label": "Default"
  },
  {
    "id": "q_pres_2020_recall-q_pres_2020_recall_counterfactual",
    "source": "q_pres_2020_recall",
    "target": "q_pres_2020_recall_counterfactual",
    "label": "A3"
  },
  {
    "id": "q_pres_2020_recall-q_pres_2020_recall_counterfactual",
    "source": "q_pres_2020_recall",
    "target": "q_pres_2020_recall_counterfactual",
    "label": "A4"
  },
  {
    "id": "q_pres_2020_recall-q_pres_2020_recall_counterfactual",
    "source": "q_pres_2020_recall",
    "target": "q_pres_2020_recall_counterfactual",
    "label": "A5"
  },
  {
    "id": "q_pres_2020_recall-q_pres_2020_recall_counterfactual",
    "source": "q_pres_2020_recall",
    "target": "q_pres_2020_recall_counterfactual",
    "label": "A6"
  },
  {
    "id": "q_pres_2020_recall-q_senate_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_senate_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall-q_senate_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_senate_2022_recall",
    "label": "A2"
  },
  {
    "id": "q_pres_2020_recall-q_senate_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_senate_2022_recall",
    "label": "A7"
  },
  {
    "id": "q_pres_2020_recall-q_gov_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_gov_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall-q_gov_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_gov_2022_recall",
    "label": "A2"
  },
  {
    "id": "q_pres_2020_recall-q_gov_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_gov_2022_recall",
    "label": "A7"
  },
  {
    "id": "q_pres_2020_recall-q_cong_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_cong_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall-q_cong_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_cong_2022_recall",
    "label": "A2"
  },
  {
    "id": "q_pres_2020_recall-q_cong_2022_recall",
    "source": "q_pres_2020_recall",
    "target": "q_cong_2022_recall",
    "label": "A7"
  },
  {
    "id": "q_pres_2020_recall-q_race_hisp",
    "source": "q_pres_2020_recall",
    "target": "q_race_hisp",
    "label": "Default"
  },
  {
    "id": "q_pres_2020_recall_counterfactual-q_senate_2022_recall",
    "source": "q_pres_2020_recall_counterfactual",
    "target": "q_senate_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall_counterfactual-q_gov_2022_recall",
    "source": "q_pres_2020_recall_counterfactual",
    "target": "q_gov_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall_counterfactual-q_cong_2022_recall",
    "source": "q_pres_2020_recall_counterfactual",
    "target": "q_cong_2022_recall",
    "label": "A1"
  },
  {
    "id": "q_pres_2020_recall_counterfactual-q_race_hisp",
    "source": "q_pres_2020_recall_counterfactual",
    "target": "q_race_hisp",
    "label": "Default"
  },
  {
    "id": "q_senate_2022_recall-q_race_hisp",
    "source": "q_senate_2022_recall",
    "target": "q_race_hisp",
    "label": "Default"
  },
  {
    "id": "q_gov_2022_recall-q_race_hisp",
    "source": "q_gov_2022_recall",
    "target": "q_race_hisp",
    "label": "Default"
  },
  {
    "id": "q_cong_2022_recall-q_race_hisp",
    "source": "q_cong_2022_recall",
    "target": "q_race_hisp",
    "label": "Default"
  },
  {
    "id": "q_race_hisp-q_race",
    "source": "q_race_hisp",
    "target": "q_race",
    "label": "Default"
  },
  {
    "id": "q_race-q_country",
    "source": "q_race",
    "target": "q_country",
    "label": "A3"
  },
  {
    "id": "q_race-q_country",
    "source": "q_race",
    "target": "q_country",
    "label": "A1"
  },
  {
    "id": "q_race-q_country_asia",
    "source": "q_race",
    "target": "q_country_asia",
    "label": "A4"
  },
  {
    "id": "q_race-q_home_language",
    "source": "q_race",
    "target": "q_home_language",
    "label": "Default"
  },
  {
    "id": "q_country-q_country_asia",
    "source": "q_country",
    "target": "q_country_asia",
    "label": "A4"
  },
  {
    "id": "q_country-q_home_language",
    "source": "q_country",
    "target": "q_home_language",
    "label": "Default"
  },
  {
    "id": "q_country_asia-q_home_language",
    "source": "q_country_asia",
    "target": "q_home_language",
    "label": "Default"
  },
  {
    "id": "q_home_language-q_first_gen",
    "source": "q_home_language",
    "target": "q_first_gen",
    "label": "Default"
  },
  {
    "id": "q_first_gen-q_second_gen",
    "source": "q_first_gen",
    "target": "q_second_gen",
    "label": "Default"
  },
  {
    "id": "q_second_gen-q_religion",
    "source": "q_second_gen",
    "target": "q_religion",
    "label": "Default"
  },
  {
    "id": "q_religion-q_religion_evang",
    "source": "q_religion",
    "target": "q_religion_evang",
    "label": "A1"
  },
  {
    "id": "q_religion-q_religion_evang",
    "source": "q_religion",
    "target": "q_religion_evang",
    "label": "A2"
  },
  {
    "id": "q_religion-q_religion_evang",
    "source": "q_religion",
    "target": "q_religion_evang",
    "label": "A3"
  },
  {
    "id": "q_religion-q_religion_evang",
    "source": "q_religion",
    "target": "q_religion_evang",
    "label": "A4"
  },
  {
    "id": "q_religion-q_religion_evang",
    "source": "q_religion",
    "target": "q_religion_evang",
    "label": "A8"
  },
  {
    "id": "q_religion-q_state_years",
    "source": "q_religion",
    "target": "q_state_years",
    "label": "Default"
  },
  {
    "id": "q_religion_evang-q_state_years",
    "source": "q_religion_evang",
    "target": "q_state_years",
    "label": "Default"
  },
  {
    "id": "q_state_years-q_class_combined",
    "source": "q_state_years",
    "target": "q_class_combined",
    "label": "Default"
  },
  {
    "id": "q_class_combined-q_fav1",
    "source": "q_class_combined",
    "target": "q_fav1",
    "label": "Default"
  },
  {
    "id": "q_fav1-q_fav2",
    "source": "q_fav1",
    "target": "q_fav2",
    "label": "Default"
  },
  {
    "id": "q_fav2- q_fav3_short",
    "source": "q_fav2",
    "target": " q_fav3_short",
    "label": "A0"
  },
  {
    "id": "q_fav2- q_fav3_long",
    "source": "q_fav2",
    "target": " q_fav3_long",
    "label": "A1"
  },
  {
    "id": "q_fav2- q_fav3_long2",
    "source": "q_fav2",
    "target": " q_fav3_long2",
    "label": "A0"
  },
  {
    "id": "q_fav2- q_fav3_short",
    "source": "q_fav2",
    "target": " q_fav3_short",
    "label": "Default"
  },
  {
    "id": " q_fav3_short- q_fav4_short",
    "source": " q_fav3_short",
    "target": " q_fav4_short",
    "label": "Default"
  },
  {
    "id": " q_fav4_short- q_fav5_short",
    "source": " q_fav4_short",
    "target": " q_fav5_short",
    "label": "Default"
  },
  {
    "id": " q_fav5_short- q_fav6_short",
    "source": " q_fav5_short",
    "target": " q_fav6_short",
    "label": "Default"
  },
  {
    "id": " q_fav6_short-q_top_issue",
    "source": " q_fav6_short",
    "target": "q_top_issue",
    "label": "Default"
  },
  {
    "id": " q_fav3_long- q_fav4_long",
    "source": " q_fav3_long",
    "target": " q_fav4_long",
    "label": "Default"
  },
  {
    "id": " q_fav4_long- q_fav5_long",
    "source": " q_fav4_long",
    "target": " q_fav5_long",
    "label": "Default"
  },
  {
    "id": " q_fav5_long- q_fav6_long",
    "source": " q_fav5_long",
    "target": " q_fav6_long",
    "label": "Default"
  },
  {
    "id": " q_fav6_long- q_fav7_long",
    "source": " q_fav6_long",
    "target": " q_fav7_long",
    "label": "Default"
  },
  {
    "id": " q_fav7_long-q_top_issue",
    "source": " q_fav7_long",
    "target": "q_top_issue",
    "label": "Default"
  },
  {
    "id": " q_fav3_long2- q_fav4_long2",
    "source": " q_fav3_long2",
    "target": " q_fav4_long2",
    "label": "Default"
  },
  {
    "id": " q_fav4_long2- q_fav5_long2",
    "source": " q_fav4_long2",
    "target": " q_fav5_long2",
    "label": "Default"
  },
  {
    "id": " q_fav5_long2- q_fav6_long2",
    "source": " q_fav5_long2",
    "target": " q_fav6_long2",
    "label": "Default"
  },
  {
    "id": " q_fav6_long2- q_fav7_long2",
    "source": " q_fav6_long2",
    "target": " q_fav7_long2",
    "label": "Default"
  },
  {
    "id": " q_fav7_long2- q_fav8_long2",
    "source": " q_fav7_long2",
    "target": " q_fav8_long2",
    "label": "Default"
  },
  {
    "id": " q_fav8_long2-q_top_issue",
    "source": " q_fav8_long2",
    "target": "q_top_issue",
    "label": "Default"
  },
  {
    "id": "q_top_issue-q_pol_impt",
    "source": "q_top_issue",
    "target": "q_pol_impt",
    "label": "Default"
  },
  {
    "id": "q_pol_impt-q_stakes_you",
    "source": "q_pol_impt",
    "target": "q_stakes_you",
    "label": "Default"
  },
  {
    "id": "q_stakes_you-q_trait1",
    "source": "q_stakes_you",
    "target": "q_trait1",
    "label": "Default"
  },
  {
    "id": "q_trait1-q_trait2",
    "source": "q_trait1",
    "target": "q_trait2",
    "label": "Default"
  },
  {
    "id": "q_trait2-q_trait3",
    "source": "q_trait2",
    "target": "q_trait3",
    "label": "Default"
  },
  {
    "id": "q_trait3-q_trait4",
    "source": "q_trait3",
    "target": "q_trait4",
    "label": "Default"
  },
  {
    "id": "q_trait4-q_trait5",
    "source": "q_trait4",
    "target": "q_trait5",
    "label": "Default"
  },
  {
    "id": "q_trait5-q_trait6",
    "source": "q_trait5",
    "target": "q_trait6",
    "label": "Default"
  },
  {
    "id": "q_trait6-q_trust1",
    "source": "q_trait6",
    "target": "q_trust1",
    "label": "Default"
  },
  {
    "id": "q_trust1-q_trust2",
    "source": "q_trust1",
    "target": "q_trust2",
    "label": "Default"
  },
  {
    "id": "q_trust2-q_trust3",
    "source": "q_trust2",
    "target": "q_trust3",
    "label": "Default"
  },
  {
    "id": "q_trust3-q_trust4",
    "source": "q_trust3",
    "target": "q_trust4",
    "label": "Default"
  },
  {
    "id": "q_trust4-q_trust5",
    "source": "q_trust4",
    "target": "q_trust5",
    "label": "Default"
  },
  {
    "id": "q_trust5-q_lib1",
    "source": "q_trust5",
    "target": "q_lib1",
    "label": "Default"
  },
  {
    "id": "q_lib1-q_lib2",
    "source": "q_lib1",
    "target": "q_lib2",
    "label": "Default"
  },
  {
    "id": "q_lib2-q_middle_init",
    "source": "q_lib2",
    "target": "q_middle_init",
    "label": "Default"
  },
  {
    "id": "q_middle_init-close",
    "source": "q_middle_init",
    "target": "close",
    "label": "Default"
  },
  {
    "id": "refusal-panel_opt_in",
    "source": "refusal",
    "target": "panel_opt_in",
    "label": "Default"
  },
  {
    "id": "panel_opt_in-panel_close",
    "source": "panel_opt_in",
    "target": "panel_close",
    "label": "A2"
  },
  {
    "id": "panel_opt_in-panel_refuse",
    "source": "panel_opt_in",
    "target": "panel_refuse",
    "label": "A1"
  },
  {
    "id": "panel_opt_in-panel_close",
    "source": "panel_opt_in",
    "target": "panel_close",
    "label": "Default"
  },
  {
    "id": "panel_close-panel_refuse",
    "source": "panel_close",
    "target": "panel_refuse",
    "label": "Default"
  }
];
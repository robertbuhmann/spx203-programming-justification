export const scenarios = [
  {
    id: 1,
    title: "Managing training volume under high fatigue",
    client: "Recreationally trained adult lifter",
    goal: "Increase strength",
    context:
      "The participant is training 4 primary lifts twice per week using 5 × 5, but is experiencing significant fatigue.",
    originalProgram: "4 primary lifts, 5 × 5, twice per week",
    revisedProgram:
      "Reduce to 1–3 sets of 5 repetitions for the 4 primary lifts, twice per week, with total number of sets based on fatigue level.",
    question:
      "Which article best supports reducing training volume while still expecting strength improvements?",
    correctId: "a",
    explanation:
      "Schoenfeld et al. (2018) is the best match because the programming change is specifically about reducing training volume while aiming to maintain strength gains. The paper directly compares different set volumes and found similar strength improvements despite large differences in training volume.",
    takeaway:
      "Reducing volume can be a defensible strategy when fatigue is high and the priority is preserving strength adaptation while improving tolerance and recovery.",
    options: [
      {
        id: "a",
        citation:
          "Schoenfeld, B. J., Contreras, B., Krieger, J., Grgic, J., Delcastillo, K., Belliard, R., & Alto, A. (2018). Resistance training volume enhances muscle hypertrophy but not strength in trained men. Medicine & Science in Sports & Exercise, 51(1), 94.",
        shortLabel: "Best evidence match",
        summary:
          "Compared 1, 3, and 5 sets per exercise in trained men. Strength improved similarly across groups despite major differences in training volume. Best fit for a decision about reducing sets while still targeting strength."
      },
      {
        id: "b",
        citation:
          "Schoenfeld, B. J., Grgic, J., Ogborn, D., & Krieger, J. W. (2017). Strength and hypertrophy adaptations between low- vs. high-load resistance training: A systematic review and meta-analysis. Journal of Strength and Conditioning Research, 31(12), 3508–3523.",
        shortLabel: "Distractor",
        summary:
          "Useful for decisions about training load and intensity, not number of sets or total training volume."
      },
      {
        id: "c",
        citation:
          "Grgic, J., Schoenfeld, B. J., Orazem, J., & Sabol, F. (2022). Effects of resistance training performed to repetition failure or non-failure on muscular strength and hypertrophy: A systematic review and meta-analysis. Journal of Sport and Health Science, 11(2), 202–211.",
        shortLabel: "Distractor",
        summary:
          "Useful for decisions about training to failure versus non-failure, not for reducing set volume."
      }
    ]
  },
  {
    id: 2,
    title: "Substituting a glute-focused exercise",
    client: "Running athlete",
    goal: "Improve gluteus maximus contribution to hip extension strength",
    context:
      "The athlete currently has a split squat in the program but finds it uncomfortable and wants an alternative exercise that targets the same goal.",
    originalProgram: "Split squat",
    revisedProgram: "Single-leg Romanian deadlift or hip thrust",
    question:
      "Which article best supports replacing the split squat with a single-leg Romanian deadlift or hip thrust for glute max loading?",
    correctId: "a",
    explanation:
      "Collings et al. (2023) is the strongest match because it directly compares gluteal muscle forces across several hip-focused exercises and found that the loaded split squat, loaded single-leg Romanian deadlift, and loaded single-leg hip thrust were among the highest-force exercises for gluteus maximus.",
    takeaway:
      "Exercise substitution is stronger when evidence shows the alternative can load the same target musculature in a similar way.",
    options: [
      {
        id: "a",
        citation:
          "Collings, T. J., Bourne, M. N., Barrett, R. S., Meinders, E. V. Y., Gonçalves, B. A., Shield, A. J., & Diamond, L. E. (2023). Gluteal muscle forces during hip-focused injury prevention and rehabilitation exercises. Medicine & Science in Sports & Exercise, 55(4), 650–660.",
        shortLabel: "Best evidence match",
        summary:
          "Estimated actual gluteal muscle forces across multiple exercises. For gluteus maximus, high-force exercises included the loaded split squat, loaded single-leg Romanian deadlift, and loaded single-leg hip thrust."
      },
      {
        id: "b",
        citation:
          "Selkowitz, D. M., Beneck, G. J., & Powers, C. M. (2013). Which exercises target the gluteal muscles while minimizing activation of the tensor fascia lata? Journal of Orthopaedic & Sports Physical Therapy, 43(2), 54–64.",
        shortLabel: "Distractor",
        summary:
          "Relevant to gluteal activation relative to tensor fascia lata activation, but not the strongest evidence for selecting high-force hip extension substitutes."
      },
      {
        id: "c",
        citation:
          "Macadam, P., Cronin, J., & Contreras, B. (2015). An examination of the gluteal muscle activity associated with dynamic hip abduction and hip external rotation exercise: A systematic review. International Journal of Sports Physical Therapy, 10(5), 573–591.",
        shortLabel: "Distractor",
        summary:
          "Mostly relevant to hip abduction and external rotation, not the strongest choice for selecting a hip extension substitute."
      }
    ]
  },
  {
    id: 3,
    title: "Shifting an older adult program toward function",
    client: "Generally healthy older adult",
    goal: "Improve physical function during activities of daily living",
    context:
      "The participant has been doing mostly isolated machine-based exercises for 3 × 10–12 and is not finding them very effective for improving physical function.",
    originalProgram:
      "Primarily isolated machine-based movements for 3 × 10–12",
    revisedProgram:
      "Use more multi-joint exercises with an emphasis on fast concentric intent to develop power and improve transfer to daily function.",
    question:
      "Which article best supports revising the program toward power-focused, functionally relevant resistance training?",
    correctId: "a",
    explanation:
      "Balachandran et al. (2022) is the strongest match because it directly compares power training with traditional strength training in older adults and found modestly greater improvements in physical function with power training.",
    takeaway:
      "When physical function is the target, shifting from traditional slower resistance training toward power-focused training can be justified.",
    options: [
      {
        id: "a",
        citation:
          "Balachandran, A. T., Steele, J., Angielczyk, D., Belio, M., Schoenfeld, B. J., Quiles, N., ... & Abou-Setta, A. M. (2022). Comparison of power training vs traditional strength training on physical function in older adults: A systematic review and meta-analysis. JAMA Network Open, 5(5), e2211623.",
        shortLabel: "Best evidence match",
        summary:
          "Systematic review and meta-analysis showing that power training produced modestly greater improvements in physical function than traditional strength training in healthy community-dwelling older adults."
      },
      {
        id: "b",
        citation:
          "Stathokostas, L., Little, R. M. D., Vandervoort, A. A., & Paterson, D. H. (2012). Flexibility training and functional ability in older adults: A systematic review. Journal of Aging Research, 2012, 306818.",
        shortLabel: "Distractor",
        summary:
          "Relevant to flexibility, but does not strongly support changing a resistance program toward power-focused training for function."
      },
      {
        id: "c",
        citation:
          "Zhao, L., et al. (2024). Effectiveness of home-based exercise for functional rehabilitation in older adults after hip fracture surgery: A systematic review and meta-analysis of randomized controlled trials. PLOS ONE.",
        shortLabel: "Distractor",
        summary:
          "Relevant older-adult rehabilitation paper, but mixed findings and not the strongest support for revising a healthy older adult program toward power training."
      }
    ]
  }
];

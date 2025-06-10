import BgImage from "../../assets/Banner_DIA.png"
// const researchers =
//     [
//         {
//             name: "Paul Clegg",
//             homepage: "https://www.ph.ed.ac.uk/people/paul-clegg",
//             expertise: "Experimental physicist at SoPA, with expertise in colloid experiments, data science, and machine learning",
//             interests: "Medical physics, PET imaging, Machine Learning for PET Analysis"
//         },
//         {
//             name: "Franz Muheim",
//             homepage: "https://www.ph.ed.ac.uk/people/franz-muheim",
//             expertise: "Experimental physicist at SoPA, with expertise in large-scale experiments and detector design",
//             interests: "Medical and PET imaging, detector physics"
//         },
//         {
//             name: "Matt Needham",
//             homepage: "https://www.ph.ed.ac.uk/people/matthew-needham",
//             expertise: "Experimentalist at SoPA, with expertise in detector physics, data science, and medical imaging",
//             interests: "Medical physics, PET imaging, Machine Learning for PET Analysis"
//         },
//         {
//             name: "Dave Newby",
//             homepage: "https://www.ed.ac.uk/profile/david-newby",
//             expertise: "Cardiologist at Little France, in the Centre for Cardiovascular Science, with expertise in medical imaging and clinical research",
//             interests: "Experimental medicine, advanced imaging of cardiovascular disease, coronary heart disease, aortic stenosis, heart failure, interaction between cardiac and respiratory diseases"
//         },
//         {
//             name: "Michael Thrippleton",
//             homepage: "https://www.ed.ac.uk/profile/dr-michael-thrippleton",
//             expertise: "Senior Research Fellow/Clinical Scientist, Edinburgh Imaging and Centre for Clinical Brain Sciences (BioQuarter)",
//             interests: "MRI physics, magnetic resonance spectroscopy, quantitative imaging, brain imaging, biomarker development, validation and translation"
//         } ,
//         {
//             name: "Adam Waldman",
//             homepage: "https://www.ed.ac.uk/profile/professor-adam-waldman",
//             expertise: "Neuroradiologist at Little France, with expertise in medical imaging and clinical research",
//             interests: "Development and clinical translation of quantitative neuroimaging techniques, neurooncology, neurodegenerative and neuroinflammatory diseases"
//         },
//         {
//             name: "Catriona Wimberley",
//             homepage: "https://www.ph.ed.ac.uk/people/catriona-wimberley",
//             expertise: "Medical physicist at SoPA, with expertise in PET and simulations of PET",
//             interests: "PET imaging, Machine Learning in Medical Imaging, PET scan simulations, radiotracer physics"
//         },
//         {
//             name: "Ben Wynne",
//             homepage: "https://www.ph.ed.ac.uk/people/ben-wynne",
//             expertise: "Physicist at SoPA, with expertise in computer simulations, data science, and PET modelling",
//             interests: "PET scan simulations, detector physics, Machine Learning in Medical Imaging"
//         },
//     ]
const researchers = [
    {
        name: "Pierre Bagnaninchi",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/pierre-bagnaninchi",
        expertise: "Optical interferometry , Optical Elastography, Impedance sensing",
        interests: "",
        institute: "Institute for Regeneration and Repair",
        photo: ""
    },
    {
        name: "Hanna Borecka-Bielska",
        homepage: "https://www.ph.ed.ac.uk/people/hanna-borecka-bielska",
        expertise: "Experimental physicist at SoPA, with expertise in PET scanner simulations, scintillators for PET",
        interests: "Novel clinical applications of PET",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Paul Clegg",
        homepage: "https://www.ph.ed.ac.uk/people/paul-clegg",
        expertise: "Experimental physicist at SoPA, with expertise in colloid experiments, data science, and machine learning",
        interests: "Medical physics, PET imaging, Machine Learning for PET Analysis",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Tracy Farr",
        homepage: "https://www.researchgate.net/profile/Tracy-Farr-2/2",
        expertise: "Cerebrovascular disease, Animal models, Preclinical MRI",
        interests: "MRI image analysis",
        institute: "Centre for Cardiovascular Science"
    },
    {
        name: "Matthew Gil",
        homepage: "https://www.sinapse.ac.uk/people/mgil/",
        expertise: "PET Imaging, Medical Image Processing and Machine Learning",
        interests: "PET Imaging, Medical Image Processing and Machine Learning",
        institute: "Siemens Healthineers"
    },
    {
        name: "Nik Hirani",
        homepage: "https://inflammation-research.ed.ac.uk/research/research-groups/dr-nik-hirani",
        expertise: "Respiratory physiology and disease, Omic datasets in respiratory disease esp lung fibrosis, Bronchoscopic tools to assay human lungs",
        interests: "Functional imaging for human lung, Tools to measure lung dynamics and elasticity, AI tools for multiomic integration of datasets",
        institute: "Institute for Regeneration and Repair",
        photo: "https://inflammation-research.ed.ac.uk/sites/default/files/styles/profile_picture/public/2024-09/hirani_head_shot_c.png.webp"
    },
    {
        name: "Lucy Kershaw",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/lucy-kershaw",
        expertise: "MRI Physics, Perfusion MRI, Image Analysis",
        interests: "Quantitative MRI, Contrast Agents, Ex Vivo MRI",
        institute: "Edinburgh Imaging"
    },
    {
        name: "Carmel Moran",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/carmel-moran",
        expertise: "Imaging physicist, Experimental acoustics laboratory",
        interests: "Development of ultrasound imaging techniques for diagnosis and therapy in clinical and preclinical applications, Ultrasound contrast microbubbles as cavitation nuclei, Assessment of the performance of ultrasound scanners",
        institute: "Centre for Cardiovascular Science"
    },
    {
        name: "Franz Muheim",
        homepage: "https://www.ph.ed.ac.uk/people/franz-muheim",
        expertise: "Experimental physicist at SoPA, with expertise in large-scale experiments and detector design",
        interests: "Medical and PET imaging, detector physics",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Matt Needham",
        homepage: "https://www.ph.ed.ac.uk/people/matthew-needham",
        expertise: "Experimentalist at SoPA, with expertise in detector physics, data science, and medical imaging",
        interests: "Medical physics, PET imaging, Machine Learning for PET Analysis",
        institute: "School of Physics and Astronomy"
    },
    // {
    //     name: "Dave Newby",
    //     homepage: "https://www.ed.ac.uk/profile/david-newby",
    //     expertise: "Cardiologist at Little France, in the Centre for Cardiovascular Science, with expertise in medical imaging and clinical research",
    //     interests: "Experimental medicine, advanced imaging of cardiovascular disease, coronary heart disease, aortic stenosis, heart failure, interaction between cardiac and respiratory diseases",
    //     institute: "Centre for Cardiovascular Science, Little France"
    // },
    {
        name: "Michael Stringer",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/dr-michael-stringer",
        expertise: "MRI physicist, Image analysis for clinical research",
        interests: "Quantitative neuroimaging MRI methods development, Dynamic imaging of vascular dysfunction for stroke and other vascular diseases",
        institute: "Centre for Clinical Brain Sciences"
    },
    {
        name: "Michael Thrippleton",
        homepage: "https://www.ed.ac.uk/profile/dr-michael-thrippleton",
        expertise: "Senior Research Fellow/Clinical Scientist, Edinburgh Imaging and Centre for Clinical Brain Sciences (BioQuarter)",
        interests: "MRI physics, magnetic resonance spectroscopy, quantitative imaging, brain imaging, biomarker development, validation and translation",
        institute: "Edinburgh Imaging, Centre for Clinical Brain Sciences"
    },
    {
        name: "Adam Waldman",
        homepage: "https://www.ed.ac.uk/profile/professor-adam-waldman",
        expertise: "Neuroradiologist at Little France, with expertise in medical imaging and clinical research",
        interests: "Development and clinical translation of quantitative neuroimaging techniques, neurooncology, neurodegenerative and neuroinflammatory diseases",
        institute: "Edinburgh Imaging, Centre for Clinical Brain Sciences"
    },
    {
        name: "Catriona Wimberley",
        homepage: "https://www.ph.ed.ac.uk/people/catriona-wimberley",
        expertise: "Medical physicist at SoPA, with expertise in PET and simulations of PET",
        interests: "PET imaging, Machine Learning in Medical Imaging, PET scan simulations, radiotracer physics",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Ann Wheeler",
        homepage: "https://www.research.ed.ac.uk/en/persons/ann-wheeler",
        expertise: "Biomedical Imaging, Bioimage Analysis, Cancer Biology",
        interests: "New methods for Bioimage data collection and analysis. ",
        institute: "Institute of Genetics and Cancer",
        photo: "https://www.research.ed.ac.uk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png"
    },
    {
        name: "Ben Wynne",
        homepage: "https://www.ph.ed.ac.uk/people/ben-wynne",
        expertise: "Physicist at SoPA, with expertise in computer simulations, data science, and PET modelling",
        interests: "PET scan simulations, detector physics, Machine Learning in Medical Imaging",
        institute: "School of Physics and Astronomy",
        photo: "https://static.ph.ed.ac.uk/photos/people/bwynne.jpg"
    },
    {
        name: "Beth York",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/dr-elizabeth-york",
        expertise: "Development and analysis of (in vivo) microstructural quantitative MRI, with application to multiple sclerosis",
        interests: "Imaging, analysis, application of biomedical physics to multiple sclerosis",
        institute: "Centre for Clinical Brain Sciences",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/anne_rowling_team_0243_2.jpg"
    }
];

const PhDStudents =
    ["Bea Andrews", "Abhishek Bohare", "Agathe Bricout", "Robbie Haynes", "Abigail Hellman", "Aparna Jayraj", "Jan Kutos", "Michael Langsen"]


export const DIA = {
    title: "Detectors, Imaging and Analysis",
    subtitle: "Research",
    bannerImage: {
        src: BgImage,
        alt: "Simulation of a Total-Body PET scanner",
        caption: "Simulation of a Total-Body PET scanner, showing a positron annihilation signal producing two photons from the centre of a cylindrical phantom that approximates a patient."
    },
    background: 'bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700',
    description: "This area involves physicists, clinicians, and data scientists at different sites, focusing on developing machine learning and data science techniques for medical imaging purposes. A key application area is the analysis and simulations of full-body PET scans at Little France.",
    researchers: researchers,
    phdStudents: PhDStudents,

};

//
//
// legend: {
//     sopa: "School of Physics and Astronomy",
//         igc: "Institute for Genetics and Cancer",
//         sbs: "School of Biological Sciences",
//         ecbp: "Edinburgh Centre for Biomedical Physics",
//         pet: "positron emission tomography"
// },
// lastUpdated: "04/09/2024"


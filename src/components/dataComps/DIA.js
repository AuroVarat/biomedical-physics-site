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
        name: "Paul Clegg",
        homepage: "https://www.ph.ed.ac.uk/people/paul-clegg",
        expertise: "Experimental physicist at SoPA, with expertise in colloid experiments, data science, and machine learning",
        interests: "Medical physics, PET imaging, Machine Learning for PET Analysis",
        institute: "SoPA"
    },
    {
        name: "Franz Muheim",
        homepage: "https://www.ph.ed.ac.uk/people/franz-muheim",
        expertise: "Experimental physicist at SoPA, with expertise in large-scale experiments and detector design",
        interests: "Medical and PET imaging, detector physics",
        institute: "SoPA"
    },
    {
        name: "Matt Needham",
        homepage: "https://www.ph.ed.ac.uk/people/matthew-needham",
        expertise: "Experimentalist at SoPA, with expertise in detector physics, data science, and medical imaging",
        interests: "Medical physics, PET imaging, Machine Learning for PET Analysis",
        institute: "SoPA"
    },
    // {
    //     name: "Dave Newby",
    //     homepage: "https://www.ed.ac.uk/profile/david-newby",
    //     expertise: "Cardiologist at Little France, in the Centre for Cardiovascular Science, with expertise in medical imaging and clinical research",
    //     interests: "Experimental medicine, advanced imaging of cardiovascular disease, coronary heart disease, aortic stenosis, heart failure, interaction between cardiac and respiratory diseases",
    //     institute: "Centre for Cardiovascular Science, Little France"
    // },
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
        institute: "Little France"
    },
    {
        name: "Catriona Wimberley",
        homepage: "https://www.ph.ed.ac.uk/people/catriona-wimberley",
        expertise: "Medical physicist at SoPA, with expertise in PET and simulations of PET",
        interests: "PET imaging, Machine Learning in Medical Imaging, PET scan simulations, radiotracer physics",
        institute: "SoPA"
    },
    {
        name: "Ben Wynne",
        homepage: "https://www.ph.ed.ac.uk/people/ben-wynne",
        expertise: "Physicist at SoPA, with expertise in computer simulations, data science, and PET modelling",
        interests: "PET scan simulations, detector physics, Machine Learning in Medical Imaging",
        institute: "SoPA"
    }
];

const PhDStudents =
    ["Abby Hellman", "Bea Andrews", "Robbie Haynes", "Aparna Jayraj","Jan Kutos"]


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


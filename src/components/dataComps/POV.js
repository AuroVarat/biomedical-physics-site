import BgImage from "../../assets/Banner_POV.png"
// const researchers = [
//     {
//         name: "Aidan Brown",
//         homepage: "https://sites.google.com/view/aidan-brown/home",
//         expertise: "Experimental and theoretical physicist at SoPA, with expertise in experiments with bacteria and bacteriophages, hydrodynamic theory and mathematical biology modelling",
//         interests: "Bacteriophage and bacterial biophysics, biomedical soft matter physics, active matter and active interfaces"
//     },
//     {
//         name: "Paul Digard",
//         homepage: "https://www.ed.ac.uk/profile/paul-digard",
//         expertise: "Virologist at Roslin, with expertise in microscopy, molecular and cell biology experiments",
//         interests: "Molecular biology of influenza replication, mechanisms of function of RNA viruses, herpesviruses, translational studies on antiviral drug development"
//     },
//     {
//         name: "Rowland Kao",
//         homepage: "https://www.ed.ac.uk/profile/professor-rowland-kao",
//         expertise: "Veterinary epidemiologist and data scientist joint between Roslin and SoPA, with expertise in modelling and statistical analysis of epidemics spreading",
//         interests: "Epidemiology of RNA viruses and SARS-CoV-2, genomic epidemiology of infections, physics of infections"
//     },
//     {
//         name: "Gregorsz Kudla",
//         homepage: "https://www.ed.ac.uk/profile/grzegorz-kudla",
//         expertise: "Molecular biologist at the IGC, with expertise in bioinformatics and molecular and cell biology experiments",
//         interests: "3D structure of Zika and RNA viruses, protein-RNA and protein-protein interactions"
//     },
//     {
//         name: "Samantha Lycett",
//         homepage: "https://www.ed.ac.uk/profile/samantha-lycett",
//         expertise: " Computational biologist at Roslin Institute, with expertise in phylodynamics, modelling and statistical analysis of animal and zoonotic disease systems",
//         interests: "Modelling pathogen evolution, emergence, spread and cross species adaptation, with applications to Avian Influenza and other viruses and bacteria"
//     },
//     {
//         name: "Cait MacPhee",
//         homepage: "https://caitmacphee.co.uk",
//         expertise: "Experimental biophysicist at SoPA and founder of NBIC, with expertise in microscopy and rheology experiments",
//         interests: "Biofilm structure and function, biofilm formation, biomedical soft matter physics"
//     },
//     {
//         name: "Wilson Poon",
//         homepage: "https://www2.ph.ed.ac.uk/~wckp/",
//         expertise: "Experimental biophysicist and soft matter physicist at SoPA, with expertise in microscopy and rheology",
//         interests: "Bacterial biophysics, biomedical soft matter physics, RNA droplet evaporation, the importance of viral aerosols in SARS-Cov-2 spreading"
//     },
//     {
//         name: "Simon Titmuss",
//         homepage: "https://www2.ph.ed.ac.uk/~stitmuss",
//         expertise: "Experimental biophysicist at SoPA, with expertise in neutron and X-ray scattering",
//         interests: "Self-assembly of viruses, evaporation of viral droplets, viral aerosols"
//     }
// ];
const researchers = [
    {
        name: "Aidan Brown",
        homepage: "https://sites.google.com/view/aidan-brown/home",
        expertise: "Experimental and theoretical physicist at SoPA, with expertise in experiments with bacteria and bacteriophages, hydrodynamic theory and mathematical biology modelling",
        interests: "Bacteriophage and bacterial biophysics, biomedical soft matter physics, active matter and active interfaces",
        institute: "SoPA"
    },
    {
        name: "Paul Digard",
        homepage: "https://www.ed.ac.uk/profile/paul-digard",
        expertise: "Virologist at Roslin, with expertise in microscopy, molecular and cell biology experiments",
        interests: "Molecular biology of influenza replication, mechanisms of function of RNA viruses, herpesviruses, translational studies on antiviral drug development",
        institute: "Roslin"
    },
    {
        name: "Rowland Kao",
        homepage: "https://www.ed.ac.uk/profile/professor-rowland-kao",
        expertise: "Veterinary epidemiologist and data scientist joint between Roslin and SoPA, with expertise in modelling and statistical analysis of epidemics spreading",
        interests: "Epidemiology of RNA viruses and SARS-CoV-2, genomic epidemiology of infections, physics of infections",
        institute: "Roslin and SoPA"
    },
    {
        name: "Gregorsz Kudla",
        homepage: "https://www.ed.ac.uk/profile/grzegorz-kudla",
        expertise: "Molecular biologist at the IGC, with expertise in bioinformatics and molecular and cell biology experiments",
        interests: "3D structure of Zika and RNA viruses, protein-RNA and protein-protein interactions",
        institute: "IGC"
    },
    {
        name: "Samantha Lycett",
        homepage: "https://www.ed.ac.uk/profile/samantha-lycett",
        expertise: "Computational biologist at Roslin Institute, with expertise in phylodynamics, modelling and statistical analysis of animal and zoonotic disease systems",
        interests: "Modelling pathogen evolution, emergence, spread and cross species adaptation, with applications to Avian Influenza and other viruses and bacteria",
        institute: "Roslin Institute"
    },
    {
        name: "Cait MacPhee",
        homepage: "https://caitmacphee.co.uk",
        expertise: "Experimental biophysicist at SoPA and founder of NBIC, with expertise in microscopy and rheology experiments",
        interests: "Biofilm structure and function, biofilm formation, biomedical soft matter physics",
        institute: "SoPA"
    },
    {
        name: "Wilson Poon",
        homepage: "https://www2.ph.ed.ac.uk/~wckp/",
        expertise: "Experimental biophysicist and soft matter physicist at SoPA, with expertise in microscopy and rheology",
        interests: "Bacterial biophysics, biomedical soft matter physics, RNA droplet evaporation, the importance of viral aerosols in SARS-Cov-2 spreading",
        institute: "SoPA"
    },
    {
        name: "Simon Titmuss",
        homepage: "https://www2.ph.ed.ac.uk/~stitmuss",
        expertise: "Experimental biophysicist at SoPA, with expertise in neutron and X-ray scattering",
        interests: "Self-assembly of viruses, evaporation of viral droplets, viral aerosols",
        institute: "SoPA"
    }
];

const PhDStudents = [
    "Jenna Schafers",
   "Ignacio Salinas",
   "Laila Saliekhbe",
   "Ofelia Popescu",
    "Liqi Chen"

];

export const POV = {
    title: "Physics of Infection",
    subtitle : "Research",
    description: 'This area involves physicists, biologists, clinicians and virologists at different sites, and focuses on the development of quantitative frameworks to understand viruses and biofilms at different scales, from molecular to epidemiological.'
,
    background: 'bg-gradient-to-r from-red-900 via-pink-700 to-purple-600',
    researchers: researchers,
    phdStudents: PhDStudents,
    bannerImage: {
        src: BgImage,
        alt: "Simulation of a bacterial colony with \"chaining\", showing bending and buckling of bacterial filaments.",
        caption: "Simulation of a bacterial colony with \"chaining\", showing bending and buckling of bacterial filaments."
    },

};
// legend: {
//     sopa: "School of Physics and Astronomy",
//         igc: "Institute for Genetics and Cancer",
//         sbs: "School of Biological Sciences",
//         ecbp: "Edinburgh Centre for Biomedical Physics",
//         roslin: "Roslin Institute",
//         nbic: "National Biofilm Innovation Centre"
// },
// lastUpdated: "04/09/2024"

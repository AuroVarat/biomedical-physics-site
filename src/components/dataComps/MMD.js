import BgImage from "../../assets/Banner_MMD.jpg"
// const researchers = [
//     {
//         name: "Chris Brackley",
//         homepage: "https://sites.google.com/site/cabrackley",
//         expertise: "Theoretical physicist at SoPA, with expertise in theory and simulations of chromatin organisation at the nucleosome and whole-chromosome scale",
//         interests: "3D chromatin structure in health and disease, chromatin remodelling in cancer, DNA and chromatin supercoiling in health and disease"
//     },
//     {
//         name: "Gerry Brien",
//         homepage: "https://www.ed.ac.uk/cancer-centre/research/brien-group",
//         expertise: "Chromatin biochemist at the IGC, Cancer Research UK Scotland, with expertise in cancer epigenetics",
//         interests: "Mechanisms of epigenetic disregulation in cancer, biochemistry of chromatin regulation, development of new cancer therapeutics"
//     },
//     {
//         name: "Nick Gilbert",
//         homepage: "https://www.chromatinlab.org",
//         expertise: "Chromatin biologist at the IGC, with expertise in optical and super-resolution microscopy, cell biology assays, next-generation sequencing",
//         interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease, common fragile sites, chromatin supercoiling, single-cell RNA-seq"
//     },
//     {
//         name: "Ava Khamseh",
//         homepage: "https://institute-genetics-cancer.ed.ac.uk/research/research-groups-a-z/a-khamseh-group",
//         expertise: "Computational biologist at the IGC and Informatics, with expertise in machine learning, statistics and causal inference",
//         interests: "Genetics and transcriptomics in oncogenesis and cancer, population genetics, machine learning for large-scale biomedical data"
//     },
//     {
//         name: "Davide Marenduzzo",
//         homepage: "https://www2.ph.ed.ac.uk/~dmarendu",
//         expertise: "Theoretical physicist at SoPA, with expertise in polymer models, coarse-grained molecular dynamics simulations, statistical models",
//         interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease"
//     },
//     {
//         name: "Catherine Naughton",
//         homepage: "https://www.research.ed.ac.uk/en/persons/catherine-naughton",
//         expertise: "Molecular biologist at IGC, with expertise in microscopy, sequencing experiments and supercoiling mapping",
//         interests: "centromeric chromatin structure, chromosome instability, transcription in health and disease, chromatin supercoiling in health and disease"
//     },
//     {
//         name: "Giuseppe Negro",
//         homepage: "https://it.linkedin.com/in/giuseppe-negro-698502121",
//         expertise: "Computational physicist at SoPA, with expertise in large-scale computer simulations of biological and soft matter physics",
//         interests: "RNA/protein gels inside the nucleus, phase field modelling for chromatin, modelling of nuclear structures in eukaryotes"
//     },
//     {
//         name: "Willem Vanderlinden",
//         homepage: "https://www.ph.ed.ac.uk/people/willem-vanderlinden",
//         expertise: "Biophysicist at SoPA, with expertise in atomic force microscopy and single molecule experiments",
//         interests: "3D structure of chromatin and chromosomes, chromatin-binding proteins, DNA and chromatin topology"
//     }
// ];
const researchers = [
    {
        name: "Chris Brackley",
        homepage: "https://sites.google.com/site/cabrackley",
        expertise: "Theoretical physicist at SoPA, with expertise in theory and simulations of chromatin organisation at the nucleosome and whole-chromosome scale",
        interests: "3D chromatin structure in health and disease, chromatin remodelling in cancer, DNA and chromatin supercoiling in health and disease",
        institute: "SoPA"
    },
    {
        name: "Gerry Brien",
        homepage: "https://www.ed.ac.uk/cancer-centre/research/brien-group",
        expertise: "Chromatin biochemist at the IGC, Cancer Research UK Scotland, with expertise in cancer epigenetics",
        interests: "Mechanisms of epigenetic disregulation in cancer, biochemistry of chromatin regulation, development of new cancer therapeutics",
        institute: "IGC, Cancer Research UK Scotland"
    },
    {
        name: "Nick Gilbert",
        homepage: "https://www.chromatinlab.org",
        expertise: "Chromatin biologist at the IGC, with expertise in optical and super-resolution microscopy, cell biology assays, next-generation sequencing",
        interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease, common fragile sites, chromatin supercoiling, single-cell RNA-seq",
        institute: "IGC"
    },
    {
        name: "Ava Khamseh",
        homepage: "https://institute-genetics-cancer.ed.ac.uk/research/research-groups-a-z/a-khamseh-group",
        expertise: "Computational biologist at the IGC and Informatics, with expertise in machine learning, statistics and causal inference",
        interests: "Genetics and transcriptomics in oncogenesis and cancer, population genetics, machine learning for large-scale biomedical data",
        institute: "IGC and Informatics"
    },
    {
        name: "Davide Marenduzzo",
        homepage: "https://www2.ph.ed.ac.uk/~dmarendu",
        expertise: "Theoretical physicist at SoPA, with expertise in polymer models, coarse-grained molecular dynamics simulations, statistical models",
        interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease",
        institute: "SoPA"
    },
    {
        name: "Catherine Naughton",
        homepage: "https://www.research.ed.ac.uk/en/persons/catherine-naughton",
        expertise: "Molecular biologist at IGC, with expertise in microscopy, sequencing experiments and supercoiling mapping",
        interests: "Centromeric chromatin structure, chromosome instability, transcription in health and disease, chromatin supercoiling in health and disease",
        institute: "IGC"
    },
    {
        name: "Giuseppe Negro",
        homepage: "https://it.linkedin.com/in/giuseppe-negro-698502121",
        expertise: "Computational physicist at SoPA, with expertise in large-scale computer simulations of biological and soft matter physics",
        interests: "RNA/protein gels inside the nucleus, phase field modelling for chromatin, modelling of nuclear structures in eukaryotes",
        institute: "SoPA"
    },
    {
        name: "Willem Vanderlinden",
        homepage: "https://www.ph.ed.ac.uk/people/willem-vanderlinden",
        expertise: "Biophysicist at SoPA, with expertise in atomic force microscopy and single molecule experiments",
        interests: "3D structure of chromatin and chromosomes, chromatin-binding proteins, DNA and chromatin topology",
        institute: "SoPA"
    }
];

const PhDStudents = [
    "Cleis Battaglia", "Auro Patnaik", "Ola Sobieska", "Matthew Thomas"];

export const MMD = {
    title: "Molecular Mechanisms of Diseases",
    subtitle: "Research",
    description: 'This area involves physicists, molecular biologists, clinicians at different sites, and focuses on the development and experimental validation of mechanistic models for cancer and genetic diseases, typically dependent on aberrant chromatin and chromosome 3D structure and function.'
    ,
    background: 'bg-gradient-to-r from-green-900 via-teal-700 to-blue-500',
//     bannerImages: [
//         {
//             src: "HiPHoP.jpg",
//             alt: "HiP-HoP",
//             width: 400,
//             height: 400
//         },
//         {
//             src: "SAMD4A.jpg",
//             alt: "SAMD4A",
//             width: 500,
//             height: 400
//         },
//         {caption: "(Left) Sketch of the HiP-HoP model, developed by the Gilbert and Marenduzzo groups to predict chromatin structure genome-wide in human cells. (Right) Example of HiP-HoP simulation for SAMD4A, a key gene in inflammatory response. Click here to access 3DGene, which contains HiP-HoP results for 3D genome structure genome-wide.",}
//
// ],
    bannerImage: {
        src: BgImage,
        alt: "Example of HiP-HoP simulation for SAMD4A, a key gene in inflammatory response.",
        caption: "Example of HiP-HoP simulation for SAMD4A, a key gene in inflammatory response."
    },

    researchers: researchers,
    phdStudents: PhDStudents,

};

// legend: {
//     sopa: "School of Physics and Astronomy",
//         igc: "Institute for Genetics and Cancer",
//         sbs: "School of Biological Sciences",
//         ecbp: "Edinburgh Centre for Biomedical Physics",
//         hipHop: "highly predictive heteromorphic polymer model"
// },
// lastUpdated: "04/09/2024"

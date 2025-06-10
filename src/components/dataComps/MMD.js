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
        name: "Guillaume Blin",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/guillaume-blin",
        expertise: "Microfabrication, Mechanosensing, Quantitative imaging",
        interests: "Cell fate patterning, In vitro modelling of human development, Congenital diseases of the spine and regeneration of the spine",
        institute: "SBS",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/guillaume_blin_resized.jpg"
    },
    {
        name: "Chris Brackley",
        homepage: "https://sites.google.com/site/cabrackley",
        expertise: "Theoretical physicist at SoPA, with expertise in theory and simulations of chromatin organisation at the nucleosome and whole-chromosome scale",
        interests: "3D chromatin structure in health and disease, chromatin remodelling in cancer, DNA and chromatin supercoiling in health and disease",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Gerry Brien",
        homepage: "https://www.ed.ac.uk/cancer-centre/research/brien-group",
        expertise: "Chromatin biochemist at the IGC, Cancer Research UK Scotland, with expertise in cancer epigenetics",
        interests: "Mechanisms of epigenetic disregulation in cancer, biochemistry of chromatin regulation, development of new cancer therapeutics",
        institute: "Institute of Genetics and Cancer, Cancer Research UK Scotland"
    },
    {
        name: "Sara Buonomo",
        homepage: "https://buonomo.bio.ed.ac.uk/",
        expertise: "Chromatin architecture, both at single cell and genome wide",
        interests: "Chromatin architecture, DNA replication and epigenetics connection",
        institute: "Institute of Cell Biology"
    },
    {
        name: "Scott L. Cockroft",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/professor-scott-l-cockroft",
        expertise: "patch-clamp, vesicles, transmembrane proteins",
        interests: "membranes, antimicrobial resistance, single-molecule studies",
        institute: "School of Chemistry",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/professor_scott_cockroft.jpg"
    },
    {
        name: "Chris Coxon",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/dr-christopher-r-coxon",
        expertise: "Design and synthesis of chemical probes , Fluorine 19 magnetic resonance spectroscopy ",
        interests: "Peptide synthesis, including modifications such as fluorescent labels, biotin, lipids etc, Fluorine NMR to study biology, Biomarker detection in biofluids ",
        institute: "School of chemistry ",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/dr_christopher_r_coxon.jpg"
    },
    {
        name: "Yi Feng",
        homepage: "https://inflammation-research.ed.ac.uk/research/research-groups/dr-yi-feng",
        expertise: "Zebrafish genetics and development; in vivo live imaging; tumour associated inflammation",
        interests: "Oncogenesis & tumour initiation, in vivo live imaging, tissue mechanical environment & in vivo cell behaviour",
        institute: "Institute for Regeneration and Repair (IRR) centre for inflammation Research ",
        photo: "https://inflammation-research.ed.ac.uk/sites/default/files/styles/profile_picture/public/thumbnails/uoe_contact_single/yi_feng_-_updated_headshot_3.jpg.webp"
    },
    {
        name: "Giada Forte",
        homepage: "https://www.ph.ed.ac.uk/people/giada-forte",
        expertise: "",
        interests: "Chromatin and DNA molecular dynamics simulations, DNA topology , ",
        institute: "School of Physics and Astronomy",
        photo: ""
    },
    {
        name: "Nick Gilbert",
        homepage: "https://www.chromatinlab.org",
        expertise: "Chromatin biologist at the IGC, with expertise in optical and super-resolution microscopy, cell biology assays, next-generation sequencing",
        interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease, common fragile sites, chromatin supercoiling, single-cell RNA-seq",
        institute: "Institute of Genetics and Cancer"
    },
    {
        name: "Mathew Horrocks",
        homepage: "https://inflammation-research.ed.ac.uk/research/research-groups/professor-mathew-h-horrocks",
        expertise: "Single-molecule and super-resolution microscopy",
        interests: "Microscopy, Neurodegeneration. , Biomarkers. ",
        institute: "IRR (CMVM) and School of Chemistry (CSE)",
        photo: "https://inflammation-research.ed.ac.uk/sites/default/files/styles/profile_picture/public/thumbnails/uoe_contact_single/mathew_h_horrocks.jpg.webp"
    },
    {
        name: "Ava Khamseh",
        homepage: "https://institute-genetics-cancer.ed.ac.uk/research/research-groups-a-z/a-khamseh-group",
        expertise: "Computational biologist at the IGC and Informatics, with expertise in machine learning, statistics and causal inference",
        interests: "Genetics and transcriptomics in oncogenesis and cancer, population genetics, machine learning for large-scale biomedical data",
        institute: "IGC and Informatics"
    },
    {
        name: "Hannah Long",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/hannah-long",
        expertise: "Visualisation of 3D chromatin folding, Developing tissue culture methods for neural crest cell differentiation",
        interests: "3D chromatin topology, Mechanisms of gene regulation, Tissue formation during development",
        institute: "Institute of Genetics and Cancer",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/h._long.jpg"
    },
    {
        name: "Davide Marenduzzo",
        homepage: "https://www2.ph.ed.ac.uk/~dmarendu",
        expertise: "Theoretical physicist at SoPA, with expertise in polymer models, coarse-grained molecular dynamics simulations, statistical models",
        interests: "3D structure of chromatin and chromosomes, transcription in health and disease, chromatin topology in health and disease",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Christine Merrick",
        homepage: "https://www.research.ed.ac.uk/en/persons/christine-merrick",
        expertise: "Molecular biology, Assay development, High throughput screening",
        interests: "Development of new materials with biomedical applications",
        institute: "Institute of Quantitative Biology, Biochemistry and Biotechnology"
    },
    {
        name: "Davide Michieletto",
        homepage: "https://www.ph.ed.ac.uk/people/davide-michieletto",
        expertise: "MD simulations , super-resolution microscopy, microrheology DNA-protein fluids",
        interests: "DNA topology (experiments/simulations), chromatin organisation (simulations), Topoisomerase-targeting drugs (ML and experiments), ",
        institute: "School of Physics and Astronomy",
        photo: "https://static.ph.ed.ac.uk/photos/people/dmichiel.jpg"
    },
    {
        name: "Catherine Naughton",
        homepage: "https://www.research.ed.ac.uk/en/persons/catherine-naughton",
        expertise: "Molecular biologist at IGC, with expertise in microscopy, sequencing experiments and supercoiling mapping",
        interests: "Centromeric chromatin structure, chromosome instability, transcription in health and disease, chromatin supercoiling in health and disease",
        institute: "Institute of Genetics and Cancer"
    },
    {
        name: "Giuseppe Negro",
        homepage: "https://it.linkedin.com/in/giuseppe-negro-698502121",
        expertise: "Computational physicist at SoPA, with expertise in large-scale computer simulations of biological and soft matter physics",
        interests: "RNA/protein gels inside the nucleus, phase field modelling for chromatin, modelling of nuclear structures in eukaryotes",
        institute: "School of Physics and Astronomy"
    },
    {
        name: "Robert Semple",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/robert-semple",
        expertise: "Rare Disease Biology, Systemic and Cellular Metabolism, Cell signalling",
        interests: "Interest in applying biophysical approaches to interrogate monogenic disease mechanism, including tools to interrogate a dynamic metabolic system, and cellular signalling.",
        institute: "Centre for Cardiovascular Science",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/semple_photo_6.22.jpg"
    },
    {
        name: "Duncan Sproul",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/duncan-sproul",
        expertise: "",
        interests: "Mechanisms of epigenetics in human disease, Quantitative modelling of epigenomic data, Regulation and impact of DNA methylation",
        institute: "Institute of Genetics and Cancer",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/d.sproul.jpg"
    },
    {
        name: "Lesley Stark",
        homepage: "https://edwebprofiles.ed.ac.uk/profile/lesley-stark",
        expertise: "Mechanisms underlying nucleolar biophysical properties",
        interests: "Tension effects on nucleolar shape and consequent cell signalling, Biophysical analysis of nucleoli in senescence",
        institute: "Edinburgh Cancer Research Centre",
        photo: "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/l.stark_.jpg"
    },
    {
        name: "Willem Vanderlinden",
        homepage: "https://www.ph.ed.ac.uk/people/willem-vanderlinden",
        expertise: "Biophysicist at SoPA, with expertise in atomic force microscopy and single molecule experiments",
        interests: "3D structure of chromatin and chromosomes, chromatin-binding proteins, DNA and chromatin topology",
        institute: "School of Physics and Astronomy"
    }
];

const PhDStudents = [
    "Cleis Battaglia", "Euan Brennan", "Mahir Amer Haque", "Auro Patnaik", "Ola Sobieska", "Matthew Thomas"];

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

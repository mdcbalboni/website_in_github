function openContent(section) {
    const contentDiv = document.getElementById('content');
    let contentText = '';

    switch (section) {
        case 'whole-genome-sequence':
            contentText = 'Conteúdo sobre Whole genome sequence...';
            break;
        case 'f4352-h6s':
            contentText = 'Conteúdo sobre F4352 H6S...';
            break;
        case 'genomic-analysis':
            contentText = 'Conteúdo sobre Genomic Analysis...';
            break;
        case 'identify-mutations':
            contentText = 'Conteúdo sobre Identify mutations related to resistance...';
            break;
        case 'investigation-new-mutations':
            contentText = 'Conteúdo sobre Investigation of new mutations...';
            break;
        case 'analyze-genomic-variability':
            contentText = 'Conteúdo sobre Analyze genomic variability...';
            break;
        case 'explore-therapeutic-targets':
            contentText = 'Conteúdo sobre Explore potential therapeutic targets...';
            break;
        default:
            contentText = 'Selecione uma opção para ver o conteúdo.';
    }

    contentDiv.innerHTML = `<p>${contentText}</p>`;
}

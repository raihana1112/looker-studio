            document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirimkan

    const query = document.getElementById('searchQuery').value; // Ambil query pencarian

    const iframe = document.getElementById('myIframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Panggil fungsi pencarian di dalam iframe
    searchInIframe(iframeDocument, query);
});

function searchInIframe(iframeDocument, query) {
    const bodyText = iframeDocument.body.innerText || iframeDocument.body.textContent;

    // Mencari apakah query ada dalam teks di dalam iframe
    if (bodyText.includes(query)) {
        alert('Data ditemukan!');
        // Anda bisa menambahkan logika lebih lanjut untuk menandai atau memfokuskan hasil pencarian
    } else {
        alert('Data tidak ditemukan.');
    }
}

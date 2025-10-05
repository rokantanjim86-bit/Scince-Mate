// আজকের বৈজ্ঞানিক টিপস এর লিস্ট
const dailyTips = [
    "💧 প্রতিদিন কমপক্ষে ৮ গ্লাস জল পান করুন - এটি শরীরের ৭০% মেটাবলিজমকে উন্নত করে।",
    "🧠 প্রতি ৩০ মিনিট কাজের পর ৫ মিনিটের বিরতি নিন। এটি ফোকাস বাড়াতে সাহায্য করে।",
    "☀️ সকালে সূর্যালোকে সময় কাটানো শরীরের ভিটামিন ডি তৈরিকে উদ্দীপিত করে এবং ঘুম ভালো হয়।"
];

// 1. Scientific Daily Tips
function displayDailyTip() {
    const today = new Date().getDay(); // দিনের উপর ভিত্তি করে টিপস
    const tipIndex = today % dailyTips.length;
    document.getElementById('tip-text').innerText = dailyTips[tipIndex];
}

// 2. Smart Routine Generator
function generateRoutine() {
    const output = document.getElementById('routine-output');
    output.innerHTML = `
        <p>সকাল ৭টা: ঘুম থেকে ওঠা ও জল পান</p>
        <p>সকাল ৮টা: স্বাস্থ্যকর নাস্তা ও দৈনিক টিপস পড়া</p>
        <p>সন্ধ্যা ৬টা: ৩০ মিনিট হাঁটা/ব্যায়াম</p>
    `;
    alert("একটি সাধারণ রুটিন তৈরি করা হয়েছে। আপনি কাস্টমাইজ করতে পারবেন!");
}

// 3. Health Tracker (Simplified Logging)
function logHealth() {
    const sleepInput = document.getElementById('sleep-input').value;
    if (sleepInput > 0) {
        alert(`${sleepInput} ঘন্টা ঘুম লগ করা হয়েছে। ভালো ঘুম স্বাস্থ্যের চাবিকাঠি!`);
        document.getElementById('sleep-input').value = '';
    } else {
        alert("দয়া করে ঘুমের সঠিক সময় দিন।");
    }
}

// 5. AI Assistant
function openAIAssistant() {
    // এখানে একটি চ্যাট উইন্ডো খোলার বা ভয়েস রিকগনিশন শুরু করার কোড থাকবে।
    alert("🤖 আমি আপনার ScienceMate AI সহকারী! কিভাবে সাহায্য করতে পারি?");
}

// অ্যাপ শুরু করার সময় ফাংশন কল করা
window.onload = function() {
    displayDailyTip();
};
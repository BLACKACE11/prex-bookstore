const supabaseUrl = "https://prex-bookstoreseller11.vercel.app";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwaW5remVsZmVwdnJsd3FoZXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4OTA5MjcsImV4cCI6MjA5MjQ2NjkyN30.BqBWWlINcDLgmhe9fjmDrEL6uIC6YZ9SHgMGh1ghKQI"
       

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// signup
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) alert(error.message);
  else alert("Signup successful!");
}

// login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) alert(error.message);
  else alert("Login successful!");
}
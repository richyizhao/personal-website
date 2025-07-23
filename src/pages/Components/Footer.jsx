function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currentYear}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
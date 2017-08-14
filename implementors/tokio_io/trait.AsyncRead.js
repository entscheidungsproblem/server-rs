(function() {var implementors = {};
implementors["os_balloon"] = ["impl <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_serial/unix/struct.Serial.html\" title=\"struct tokio_serial::unix::Serial\">Serial</a>","impl&lt;E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>",];
implementors["tokio_core"] = ["impl <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",];
implementors["tokio_io"] = [];
implementors["tokio_serial"] = ["impl&lt;E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_serial/struct.Serial.html\" title=\"struct tokio_serial::Serial\">Serial</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

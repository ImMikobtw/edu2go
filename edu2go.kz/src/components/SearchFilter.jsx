import { useState } from "react";
import "../styles/SearchFilter.css"
import axios from "axios";

export function SearchFilter() {
    const [institute, setInstitutes] = useState([]);
    const [degree, setDegrees] = useState([]);
    const [stream, setStreams] = useState([]);

    const [selectedInstitute, setSelectedInstitute] = useState("");
    const [selectedDegree, setSelectedDegree] = useState("");
    const [selectedStream, setSelectedStream] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchOptions() {
            try {
                const [instRes, degRes, streamRes] = await Promise.all ([
                   axios.get("#"),
                   axios.get("#"),
                   axios.get("#"),
                ]);

                setInstitutes(instRes.data);
                setDegrees(degRes.data);
                setStreams(streamRes.data);

            }catch(error) {
                console.error("Error fetching options:", error);
                setMessage("Failed to load options");
            }
        }

        fetchOptions();
    }, []);

    const handleCheck = async () => {
        if (!selectedInstitute || !selectedDegree || !selectedStream) {
            setMessage("Please, select all the options");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const { data } = await axios.post("#", {
                institute: selectedInstitute,
                degree: selectedDegree,
                stream: selectedStream,
            });

            setMessage(`Results found: ${data.count}`);

        } catch(error) {
            console.error("Error fetching results:", error);
            setMessage("Error fetching results. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="searchFilter">
            <select value = {selectedInstitute} onChange = {(e) => setSelectedInstitute(e.target.value)}>
                <option value = "">Select Institute</option>
                {setInstitutes.map((inst) => (
                    <option key = {inst.id} value = {inst.name}>{ inst.name }</option>
                ))}
            </select>

            <select value = {selectedDegree} onChange = {(e) => setSelectedDegree(e.target.value)}>
                <option value = "">Select Degree</option>
                {setDegrees.map((deg) => (
                    <option key = {deg.id} value = {deg.name}>{ deg.name }</option>
                ))}
            </select>

            <select value = {selectedStream} onChange = {(e) => setSelectedStream(e.target.value)}>
                <option value="">Select Stream</option>
                {setStreams.map((stream) => (
                    <option key = {stream.id} value = {stream.name}>{ stream.name }</option>
                ))}
            </select>

            <button onClick = { handleCheck } className = "checkButton" disabled = {loading}>
                {loading ? "Checking..." : "Check"}
            </button>

            {message && <p className = "message">{ message }</p>}
        </div>
    );
}
// Shield Rotation Animation
let shieldRotation = 0;
function rotateShield() {
    const shield = document.querySelector('.cyber-shield-3d');
    shieldRotation += 45;
    shield.style.transform = `rotateY(${shieldRotation}deg)`;
}

// Network Visualization
function updateNetwork() {
    const nodes = document.querySelector('.network-nodes');
    const connections = document.querySelector('.network-connections');
    const threats = document.querySelector('.threat-particles');
    
    // Clear previous nodes
    nodes.innerHTML = '';
    connections.innerHTML = '';
    threats.innerHTML = '';
    
    // Create new nodes
    for (let i = 0; i < 5; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        nodes.appendChild(node);
    }
    
    // Create connections
    const nodeElements = nodes.querySelectorAll('.network-node');
    nodeElements.forEach((node1, i) => {
        nodeElements.forEach((node2, j) => {
            if (i < j) {
                const connection = document.createElement('div');
                connection.className = 'network-connection';
                connection.style.left = `${node1.offsetLeft}px`;
                connection.style.top = `${node1.offsetTop}px`;
                connection.style.width = `${Math.sqrt(
                    Math.pow(node2.offsetLeft - node1.offsetLeft, 2) +
                    Math.pow(node2.offsetTop - node1.offsetTop, 2)
                )}px`;
                connection.style.transform = `rotate(${Math.atan2(
                    node2.offsetTop - node1.offsetTop,
                    node2.offsetLeft - node1.offsetLeft
                )}rad)`;
                connections.appendChild(connection);
            }
        });
    });
    
    // Add threat particles
    for (let i = 0; i < 3; i++) {
        const threat = document.createElement('div');
        threat.className = 'threat-particle';
        threat.style.left = `${Math.random() * 100}%`;
        threat.style.top = `${Math.random() * 100}%`;
        threats.appendChild(threat);
    }
}

// Data Flow Animation
function animateDataFlow() {
    const dataStream = document.querySelector('.data-stream');
    const encryptionLayer = document.querySelector('.encryption-layer');
    const securityCheckpoints = document.querySelector('.security-checkpoints');
    
    // Reset animations
    dataStream.style.animation = 'none';
    encryptionLayer.style.animation = 'none';
    securityCheckpoints.style.animation = 'none';
    
    // Trigger reflow
    void dataStream.offsetWidth;
    void encryptionLayer.offsetWidth;
    void securityCheckpoints.offsetWidth;
    
    // Start animations
    dataStream.style.animation = 'dataFlow 2s infinite';
    encryptionLayer.style.animation = 'encryptionPulse 2s infinite';
    securityCheckpoints.style.animation = 'checkpointScan 2s infinite';
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes dataFlow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    @keyframes encryptionPulse {
        0% { opacity: 0.3; }
        50% { opacity: 0.8; }
        100% { opacity: 0.3; }
    }
    
    @keyframes checkpointScan {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style); 